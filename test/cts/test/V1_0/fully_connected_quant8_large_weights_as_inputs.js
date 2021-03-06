describe('CTS', function() {
  const assert = chai.assert;
  const nn = navigator.ml.getNeuralNetworkContext();

  it('check result for Fully connected quant8 large weights as inputs example', async function() {
    let model = await nn.createModel(options);
    let operandIndex = 0;

    let op1_value = [10, 10, 10, 10, 10];
    let op2_value = [10, 20, 20, 20, 10];
    let b0_value = [10];
    let op3_expect = [32];

    let type3 = {type: nn.INT32};
    let type1 = {type: nn.TENSOR_INT32, dimensions: [1], scale: 0.04, zeroPoint: 0};
    let type1_length = product(type1.dimensions);
    let type2 = {type: nn.TENSOR_QUANT8_ASYMM, dimensions: [1, 1], scale: 1., zeroPoint: 0};
    let type2_length = product(type2.dimensions);
    let type0 = {type: nn.TENSOR_QUANT8_ASYMM, dimensions: [1, 5], scale: 0.2, zeroPoint: 0};
    let type0_length = product(type0.dimensions);

    let op1 = operandIndex++;
    model.addOperand(type0);
    let op2 = operandIndex++;
    model.addOperand(type0);
    let b0 = operandIndex++;
    model.addOperand(type1);
    let op3 = operandIndex++;
    model.addOperand(type2);
    let act = operandIndex++;
    model.addOperand(type3);

    let op2_input = new Uint8Array(op2_value);
    model.setOperandValue(op2, op2_input);

    let b0_input = new Int32Array(b0_value);
    model.setOperandValue(b0, b0_input);

    model.setOperandValue(act, new Int32Array([0]));
    model.addOperation(nn.FULLY_CONNECTED, [op1, op2, b0, act], [op3]);

    model.identifyInputsAndOutputs([op1], [op3]);
    await model.finish();

    let compilation = await model.createCompilation();
    compilation.setPreference(getPreferenceCode(options.prefer));
    await compilation.finish();

    let execution = await compilation.createExecution();

    let op1_input = new Uint8Array(op1_value);
    execution.setInput(0, op1_input);

    let op3_output = new Uint8Array(type2_length);
    execution.setOutput(0, op3_output);

    await execution.startCompute();

    for (let i = 0; i < type2_length; ++i) {
      assert.isTrue(almostEqualCTS(op3_output[i], op3_expect[i]));
    }
  });
});
