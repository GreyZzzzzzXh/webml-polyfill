describe('CTS Supplement Test', function() {
  const assert = chai.assert;
  const nn = navigator.ml.getNeuralNetworkContext();

  it('check result for ATROUS_CONV_2D 3 h3 w2 implicit padding valid example-1', async function() {
    let model = await nn.createModel(options);
    let operandIndex = 0;

    let op1_value = [-0.869931, 0.644628, -0.918393, 0.153672, 0.868562, -0.358177, -0.134931, -0.247565, 0.22174, -0.259157, -0.284296, -0.538065, 0.765559, 0.41986, -0.556241, 0.658494, 0.214355, -0.850169, -0.252893, -0.478935, 0.530526, -0.0700663, -0.988729, -0.303061, 0.150845, 0.829915, 0.476349, 0.406537, -0.355343, 0.757145, -0.356362, 0.800482, -0.713861, 0.210483, -0.634303, 0.718236, -0.752038, 0.457547, -0.550769, -0.551178, 0.446766, -0.227462, 0.216348, -0.852806, -0.351486, 0.55906, -0.668493, -0.303493, -0.363763, -0.162837, 0.0701012, 0.756097, -0.142269, 0.329724, -0.656317, -0.998086, -0.652949, -0.40316, -0.893682, 0.432744, 0.612362, -0.869588, -0.71327, -0.398092, -0.0423559, 0.436576, -0.925272, 0.176549, 0.822904, 0.096833, -0.296802, -0.427195, 0.031654, -0.254479, 0.244905, 0.0948254, 0.643769, -0.90391, 0.352665, -0.901179, 0.266159, -0.968068, -0.615401, -0.388975, 0.939052, -0.116289, 0.107523, -0.0582711, 0.435172, 0.334675, 0.459711, 0.717436, 0.496627, -0.680175, -0.415066, 0.339848, 0.506004, -0.337808, -0.107218, -0.172496, 0.870638, 0.931872, -0.953884, 0.903042, 0.760078, 0.209727, -0.285384, -0.45514, 0.113194, 0.0756611, 0.0924435, -0.472863, 0.960609, -0.160385, -0.839445, 0.457097, 0.163348, 0.344867, -0.131619, 0.688715, -0.540827, 0.571259, -0.95587, 0.506164, -0.155839, 0.0789621, 0.756772, -0.662069, 0.242908, 0.460821, 0.177872, -0.289839, -0.640603, 0.702598, -0.506406, -0.568262, -0.0713716, 0.413792, 0.159673, -0.305208, 0.133816, -0.160254, 0.787323, -0.753244, 0.600721, 0.263186, -0.162387, 0.477962, -0.702951, -0.731036, -0.939481, -0.524519, 0.934072, -0.511637, -0.503499, 0.106236, -0.323684, 0.534444, -0.843745, 0.364171, 0.0370358, -0.168801, -0.404559, -0.814178, 0.91745, -0.334276, 0.66925, -0.801201, 0.156511, -0.427949, 0.379153, 0.818597, -0.649902, 0.427087, -0.586015, -0.559789, -0.833923, 0.0892409, -0.621251, 0.213826, 0.465509, 0.4704, 0.380261, 0.413067, 0.180822, 0.172866, 0.59614, 0.825575, 0.662916, -0.704381, -0.297631, 0.697778];
    let op3_expect = [-1.86841726e-01, -1.87308407e+00, 1.21135116e+00, -3.85009050e-01, 1.72032380e+00, -1.56035602e+00, -1.23059344e+00, 1.23694098e+00, 1.99985504e-03, 3.59522343e-01, 1.60084629e+00, 4.34007555e-01, -2.82945693e-01, 2.37292123e+00, -1.28653407e+00, 8.47842395e-02, -3.52093250e-01, -2.39659071e+00, 1.49246454e-01, 9.20351386e-01, -1.34345913e+00, 4.84796733e-01, -1.19989347e+00, -6.84298515e-01, -1.41301155e+00, 1.03178442e-01, -3.07042211e-01, 1.17741525e+00, 2.58936214e+00, -2.76237011e+00, -1.21565342e+00, -1.09619403e+00, 1.17431641e+00, 5.12142301e-01, 7.71379948e-01, 3.99879634e-01, -5.33092022e-02, 2.90863872e-01, 9.55634058e-01, 1.16327548e+00, 1.80768192e+00, -1.52564144e+00, 1.22480464e+00, 2.37127364e-01, -2.13295698e-01, -6.19941294e-01, 4.97942507e-01, -1.68688416e+00, 1.59314167e+00, -1.27335250e-01, 1.11420155e-01, 1.13719368e+00, 1.68536687e+00, -4.79643047e-01, 1.18607867e+00, -2.52744436e+00, 1.34135664e+00, 5.48298419e-01, -2.08380222e+00, 2.64585400e+00, -9.93354917e-01, 1.28238201e-01, 1.26091874e+00, -6.29126132e-01, -9.49230671e-01, 2.25827789e+00, -1.96100128e+00, 5.89534640e-03, -1.87852085e-01, -1.02403378e+00, 3.96120340e-01, 1.37040257e+00, 3.99355221e+00, 4.34221208e-01, 2.74464667e-01, -5.62437356e-01, -9.14871454e-01, 5.39128900e-01, -9.28685188e-01, 8.34952950e-01, 8.44179749e-01, -5.66052437e-01, -9.57342565e-01, 9.33336258e-01, -4.14666116e-01, -4.52821493e-01, -7.06006944e-01, -1.72656703e+00, -7.26575494e-01, -9.79378521e-02, -4.78667945e-01, 1.78702688e+00, -6.39287651e-01, 1.48564780e+00, -1.79904699e-01, 1.01003110e+00, -3.17118764e-01, -6.75386369e-01, 1.90969336e+00, -1.38342953e+00, 6.97255731e-01, -2.92255253e-01, 1.81634486e+00, 7.17801273e-01, 8.62478435e-01, -4.81892645e-01, -1.35565460e-01, -2.95940900e+00, 2.47845054e-01, 2.67756557e+00, -2.23998690e+00, -5.19674301e-01, 2.54447937e-01, 4.15283501e-01, -1.01065040e+00, 5.07912159e-01, 9.79926169e-01, -1.84304118e-01, -9.52005386e-04, -7.34347284e-01, -1.96684420e-01, -7.13242233e-01, 5.94973564e-01, 8.45057964e-02, 2.48496294e+00, 3.85019749e-01];

    let type0 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 8, 8, 3]};
    let type1 = {type: nn.TENSOR_FLOAT32, dimensions: [3, 3, 2, 3]};
    let type2 = {type: nn.TENSOR_FLOAT32, dimensions: [3]};
    let type3 = {type: nn.INT32};
    let type4 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 6, 7, 3]};
    let type4_length = product(type4.dimensions);

    let op1 = operandIndex++;
    model.addOperand(type0);
    let op2 = operandIndex++;
    model.addOperand(type1);
    let bias = operandIndex++;
    model.addOperand(type2);
    let pad = operandIndex++;
    model.addOperand(type3);
    let rate_w = operandIndex++;
    model.addOperand(type3);
    let rate_h = operandIndex++;
    model.addOperand(type3);
    let act = operandIndex++;
    model.addOperand(type3);
    let op3 = operandIndex++;
    model.addOperand(type4);

    model.setOperandValue(op2, new Float32Array([-0.966213, -0.579455, -0.684259, 0.738216, 0.184325, 0.0973683, -0.176863, -0.23936, -0.000233404, 0.055546, -0.232658, -0.316404, -0.012904, 0.320705, -0.326657, -0.919674, 0.868081, -0.824608, -0.467474, 0.0278809, 0.563238, 0.386045, -0.270568, -0.941308, -0.779227, -0.261492, -0.774804, -0.79665, 0.22473, -0.414312, 0.685897, -0.327792, 0.77395, -0.714578, -0.972365, 0.0696099, -0.82203, -0.79946, 0.37289, -0.917775, 0.82236, -0.144706, -0.167188, 0.268062, 0.702641, -0.412223, 0.755759, 0.721547, -0.43637, -0.274905, -0.269165, 0.16102, 0.819857, -0.312008]));
    model.setOperandValue(bias, new Float32Array([0, 0, 0]));
    model.setOperandValue(pad, new Int32Array([2]));
    model.setOperandValue(rate_w, new Int32Array([1]));
    model.setOperandValue(rate_h, new Int32Array([1]));
    model.setOperandValue(act, new Int32Array([0]));

    model.addOperation(nn.ATROUS_CONV_2D, [op1, op2, bias, pad, rate_w, rate_h, act], [op3]);
    model.identifyInputsAndOutputs([op1], [op3]);
    await model.finish();

    let compilation = await model.createCompilation();
    compilation.setPreference(getPreferenceCode(options.prefer));
    await compilation.finish();

    let execution = await compilation.createExecution();

    let op1_input = new Float32Array(op1_value);
    execution.setInput(0, op1_input);

    let op3_output = new Float32Array(type4_length);
    execution.setOutput(0, op3_output);

    await execution.startCompute();

    for (let i = 0; i < type4_length; ++i) {
      assert.isTrue(almostEqualCTS(op3_output[i], op3_expect[i]));
    }
  });

  it('check result for ATROUS_CONV_2D 3 h3 w2 implicit padding valid example-2', async function() {
    let model = await nn.createModel(options);
    let operandIndex = 0;

    let op1_value = [-0.295335, -0.00387601, -0.552251, 0.166084, -0.28482, -0.152143, -0.719885, -0.869386, -0.745598, 0.823947, 0.473183, -0.331337, 0.187631, 0.0426571, -0.826897, -0.755085, -0.472453, -0.0233656, 0.0483436, 0.933418, -0.961974, 0.0125783, 0.219742, 0.342604, -0.15166, 0.0934905, 0.783221, 0.129664, 0.838844, -0.271388, 0.924519, 0.342843, 0.274418, 0.350817, 0.841638, -0.543993, -0.00283395, -0.128467, -0.682943, -0.319117, 0.84634, 0.283003, 0.32865, 0.0293755, -0.0335696, 0.591266, -0.0743476, -0.741271, 0.462056, -0.583625, -0.590183, 0.6234, 0.535269, -0.670818, -0.955642, -0.770173, 0.479986, 0.664377, 0.399445, -0.968874, -0.276263, -0.901951, 0.544104, -0.958981, 0.482658, -0.807284, 0.305369, -0.947818, 0.827498, -0.382887, -0.805741, -0.796678, -0.299804, -0.229828, 0.818783, -0.103055, -0.45568, -0.227827, 0.543743, -0.96073, 0.946747, -0.857182, -0.96426, -0.292411, -0.715614, 0.765278, -0.475043, -0.590142, -0.238507, 0.673002, -0.473357, -0.319626, 0.936014, 0.486607, 0.580844, 0.425352, -0.800994, 0.290763, -0.494953, -0.441162, 0.718677, -0.828427, 0.96965, 7.53637e-05, -0.699973, -0.526886, -0.352682, 0.799466, 0.332789, 0.723389, 0.407659, -0.934084, -0.284705, 0.961484, -0.700395, -0.985808, -0.595342, -0.691721, 0.49448, -0.0842649, 0.0390966, 0.298938, -0.128094, -0.97158, 0.86393, 0.270606, -0.468986, -0.256605, 0.47215, -0.273117, -0.590343, -0.826529, -0.725381, -0.194821, -0.259661, -0.0949207, -0.180302, 0.0446834, -0.222133, -0.40393, 0.295772, -0.92949, 0.580079, -0.169856, 0.330311, 0.0173551, -0.635823, 0.475942, 0.907175, 0.242777, -0.512208, 0.362463, 0.0496289, 0.65171, 0.990057, 0.690733, -0.469013, -0.101311, -0.68372, -0.157841, -0.677711, -0.708224, -0.659437, -0.407607, 0.677033, 0.89032, 0.228307, -0.749514, 0.772958, 0.054701, 0.551705, 0.917052, -0.895022, -0.702397, 0.484142, 0.108648, 0.833347, 0.478872, -0.984112, 0.387176, -0.73299, 0.7526, 0.443312, -0.0987856, 0.125415, 0.10876, -0.498108, 0.43209, 0.344609, 0.928941, -0.130732, -0.0569167];
    let op3_expect = [1.0670944, -1.1653414, 1.5269374, -0.797246, 0.8027355, -0.9971091, 2.2661014, -1.4554825, 2.1550565, -1.3368183, 1.152245, -3.0932455, 0.9434587, 0.88521, 0.98794407, -0.34587651, -0.11470786, 1.7107, 0.10474667, 0.8283235, -2.4996405, -0.4894141, 1.7488927, -0.3782575, -2.102374, 0.6130228, -2.5224953, -0.74678445, 3.6381645, -1.9287052, 0.77427876, -0.6139177, -0.6500135, 1.0375304, -0.1779207, 0.8918158, -1.003732, 1.8385941, -1.5923887, -0.06626323, 0.21880639, -1.0879987, 3.04734, -1.5730183, 1.1088114, -0.98036975, -3.8530445, -0.95585847, 1.649088, 2.335727, 0.31143993, -0.5943746, 0.32574737, -0.9525648, -0.61344874, 2.8507283, 1.9469215, 1.1297737, 1.1351031, -0.44965148, 0.11876422, -0.19954622, 2.872999, 1.3804917, 2.383419, 0.88232017, 1.0379514, -0.321571, -2.602018, -1.6372006, 1.0930251, 0.4617672, 1.8484964, -0.15892673, 4.2887144, -0.4373755, -1.579401, 1.5986867, 0.08118564, 0.91205466, 0.45217666, 2.018124, 2.6290717, 1.5030414, 0.60982406, -0.11105055, 3.3563545, 2.0238643, 1.468704, -0.7083628, -0.5089922, -3.0260181, -0.7572474, 1.8527693, 2.9281664, -0.17299666, -1.132788, -0.35563594, -0.33767, -0.58875316, 2.0575933, 1.0651011, 0.8847578, -0.07121107, 3.8131914, -2.1926446, 0.11451936, 0.543556, -1.6319685, -0.2674431, 1.1570106, -2.3786144, 2.5764546, 0.53120923, 0.9498998, -0.23144162, 1.5146098, 1.5888821, 0.89593095, -0.7530838, 0.54525167, 0.74690276, 0.01299442, -0.79039794, -1.1055036, 1.7778882];

    let type0 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 8, 8, 3]};
    let type1 = {type: nn.TENSOR_FLOAT32, dimensions: [3, 3, 2, 3]};
    let type2 = {type: nn.TENSOR_FLOAT32, dimensions: [3]};
    let type3 = {type: nn.INT32};
    let type4 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 6, 7, 3]};
    let type4_length = product(type4.dimensions);

    let op1 = operandIndex++;
    model.addOperand(type0);
    let op2 = operandIndex++;
    model.addOperand(type1);
    let bias = operandIndex++;
    model.addOperand(type2);
    let pad = operandIndex++;
    model.addOperand(type3);
    let rate_w = operandIndex++;
    model.addOperand(type3);
    let rate_h = operandIndex++;
    model.addOperand(type3);
    let act = operandIndex++;
    model.addOperand(type3);
    let op3 = operandIndex++;
    model.addOperand(type4);

    model.setOperandValue(op2, new Float32Array([-0.966213, -0.579455, -0.684259, 0.738216, 0.184325, 0.0973683, -0.176863, -0.23936, -0.000233404, 0.055546, -0.232658, -0.316404, -0.012904, 0.320705, -0.326657, -0.919674, 0.868081, -0.824608, -0.467474, 0.0278809, 0.563238, 0.386045, -0.270568, -0.941308, -0.779227, -0.261492, -0.774804, -0.79665, 0.22473, -0.414312, 0.685897, -0.327792, 0.77395, -0.714578, -0.972365, 0.0696099, -0.82203, -0.79946, 0.37289, -0.917775, 0.82236, -0.144706, -0.167188, 0.268062, 0.702641, -0.412223, 0.755759, 0.721547, -0.43637, -0.274905, -0.269165, 0.16102, 0.819857, -0.312008]));
    model.setOperandValue(bias, new Float32Array([0, 0, 0]));
    model.setOperandValue(pad, new Int32Array([2]));
    model.setOperandValue(rate_w, new Int32Array([1]));
    model.setOperandValue(rate_h, new Int32Array([1]));
    model.setOperandValue(act, new Int32Array([0]));

    model.addOperation(nn.ATROUS_CONV_2D, [op1, op2, bias, pad, rate_w, rate_h, act], [op3]);
    model.identifyInputsAndOutputs([op1], [op3]);
    await model.finish();

    let compilation = await model.createCompilation();
    compilation.setPreference(getPreferenceCode(options.prefer));
    await compilation.finish();

    let execution = await compilation.createExecution();

    let op1_input = new Float32Array(op1_value);
    execution.setInput(0, op1_input);

    let op3_output = new Float32Array(type4_length);
    execution.setOutput(0, op3_output);

    await execution.startCompute();

    for (let i = 0; i < type4_length; ++i) {
      assert.isTrue(almostEqualCTS(op3_output[i], op3_expect[i]));
    }
  });

  it('check result for ATROUS_CONV_2D 3 h3 w2 implicit padding valid example-3', async function() {
    let model = await nn.createModel(options);
    let operandIndex = 0;

    let op1_value = [-0.869931, 0.644628, -0.918393, 0.153672, 0.868562, -0.358177, -0.134931, -0.247565, 0.22174, -0.259157, -0.284296, -0.538065, 0.765559, 0.41986, -0.556241, 0.658494, 0.214355, -0.850169, -0.252893, -0.478935, 0.530526, -0.0700663, -0.988729, -0.303061, 0.150845, 0.829915, 0.476349, 0.406537, -0.355343, 0.757145, -0.356362, 0.800482, -0.713861, 0.210483, -0.634303, 0.718236, -0.752038, 0.457547, -0.550769, -0.551178, 0.446766, -0.227462, 0.216348, -0.852806, -0.351486, 0.55906, -0.668493, -0.303493, -0.363763, -0.162837, 0.0701012, 0.756097, -0.142269, 0.329724, -0.656317, -0.998086, -0.652949, -0.40316, -0.893682, 0.432744, 0.612362, -0.869588, -0.71327, -0.398092, -0.0423559, 0.436576, -0.925272, 0.176549, 0.822904, 0.096833, -0.296802, -0.427195, 0.031654, -0.254479, 0.244905, 0.0948254, 0.643769, -0.90391, 0.352665, -0.901179, 0.266159, -0.968068, -0.615401, -0.388975, 0.939052, -0.116289, 0.107523, -0.0582711, 0.435172, 0.334675, 0.459711, 0.717436, 0.496627, -0.680175, -0.415066, 0.339848, 0.506004, -0.337808, -0.107218, -0.172496, 0.870638, 0.931872, -0.953884, 0.903042, 0.760078, 0.209727, -0.285384, -0.45514, 0.113194, 0.0756611, 0.0924435, -0.472863, 0.960609, -0.160385, -0.839445, 0.457097, 0.163348, 0.344867, -0.131619, 0.688715, -0.540827, 0.571259, -0.95587, 0.506164, -0.155839, 0.0789621, 0.756772, -0.662069, 0.242908, 0.460821, 0.177872, -0.289839, -0.640603, 0.702598, -0.506406, -0.568262, -0.0713716, 0.413792, 0.159673, -0.305208, 0.133816, -0.160254, 0.787323, -0.753244, 0.600721, 0.263186, -0.162387, 0.477962, -0.702951, -0.731036, -0.939481, -0.524519, 0.934072, -0.511637, -0.503499, 0.106236, -0.323684, 0.534444, -0.843745, 0.364171, 0.0370358, -0.168801, -0.404559, -0.814178, 0.91745, -0.334276, 0.66925, -0.801201, 0.156511, -0.427949, 0.379153, 0.818597, -0.649902, 0.427087, -0.586015, -0.559789, -0.833923, 0.0892409, -0.621251, 0.213826, 0.465509, 0.4704, 0.380261, 0.413067, 0.180822, 0.172866, 0.59614, 0.825575, 0.662916, -0.704381, -0.297631, 0.697778];
    let op3_expect = [2.43199, 0.7855995, -0.89247733, -0.8421999, -0.21892299, -1.4752842, 1.4666033, 1.2671402, -1.9113951, 2.8163433, 0.42375302, 1.384544, -0.05179526, -0.09704095, -1.0454197, -0.7849326, -1.0726444, -2.2269573, -1.9059162, -1.3809854, -0.21753564, -0.6674532, 0.9924352, -1.3004371, 1.3581562, -0.50957847, 0.43931735, -0.30051446, 1.9288344, 1.3749437, 0.24674952, -1.3658104, -0.24712396, 1.8478253, 0.0548588, 0.5765619, -1.0782311, 2.7078195, 0.54151404, -1.2969424, -0.4957502, -0.8728107, 2.7895741, 0.764437, 1.8849254, -0.16873728, 0.36533558, 2.3231673, -1.0529735, -1.2732302, 0.87934554, 1.3826215, 0.24184477, 1.3531275, 0.62534, 1.8519323, -2.245485, -1.8446102, 0.66178447, -1.6817732, 0.43443537, -1.101484, 0.8291666, 0.7223018, -0.18338689, 1.9866216, -0.7683655, -1.1324087, -0.671756, -0.99642277, 1.714391, -0.30889648];

    let type0 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 8, 8, 3]};
    let type1 = {type: nn.TENSOR_FLOAT32, dimensions: [3, 3, 2, 3]};
    let type2 = {type: nn.TENSOR_FLOAT32, dimensions: [3]};
    let type3 = {type: nn.INT32};
    let type4 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 4, 6, 3]};
    let type4_length = product(type4.dimensions);

    let op1 = operandIndex++;
    model.addOperand(type0);
    let op2 = operandIndex++;
    model.addOperand(type1);
    let bias = operandIndex++;
    model.addOperand(type2);
    let pad = operandIndex++;
    model.addOperand(type3);
    let rate_w = operandIndex++;
    model.addOperand(type3);
    let rate_h = operandIndex++;
    model.addOperand(type3);
    let act = operandIndex++;
    model.addOperand(type3);
    let op3 = operandIndex++;
    model.addOperand(type4);

    model.setOperandValue(op2, new Float32Array([-0.966213, -0.579455, -0.684259, 0.738216, 0.184325, 0.0973683, -0.176863, -0.23936, -0.000233404, 0.055546, -0.232658, -0.316404, -0.012904, 0.320705, -0.326657, -0.919674, 0.868081, -0.824608, -0.467474, 0.0278809, 0.563238, 0.386045, -0.270568, -0.941308, -0.779227, -0.261492, -0.774804, -0.79665, 0.22473, -0.414312, 0.685897, -0.327792, 0.77395, -0.714578, -0.972365, 0.0696099, -0.82203, -0.79946, 0.37289, -0.917775, 0.82236, -0.144706, -0.167188, 0.268062, 0.702641, -0.412223, 0.755759, 0.721547, -0.43637, -0.274905, -0.269165, 0.16102, 0.819857, -0.312008]));
    model.setOperandValue(bias, new Float32Array([0, 0, 0]));
    model.setOperandValue(pad, new Int32Array([2]));
    model.setOperandValue(rate_w, new Int32Array([2]));
    model.setOperandValue(rate_h, new Int32Array([2]));
    model.setOperandValue(act, new Int32Array([0]));

    model.addOperation(nn.ATROUS_CONV_2D, [op1, op2, bias, pad, rate_w, rate_h, act], [op3]);
    model.identifyInputsAndOutputs([op1], [op3]);
    await model.finish();

    let compilation = await model.createCompilation();
    compilation.setPreference(getPreferenceCode(options.prefer));
    await compilation.finish();

    let execution = await compilation.createExecution();

    let op1_input = new Float32Array(op1_value);
    execution.setInput(0, op1_input);

    let op3_output = new Float32Array(type4_length);
    execution.setOutput(0, op3_output);

    await execution.startCompute();

    for (let i = 0; i < type4_length; ++i) {
      assert.isTrue(almostEqualCTS(op3_output[i], op3_expect[i]));
    }
  });

  it('check result for ATROUS_CONV_2D 3 h3 w2 implicit padding valid example-4', async function() {
    let model = await nn.createModel(options);
    let operandIndex = 0;

    let op1_value = [-0.295335, -0.00387601, -0.552251, 0.166084, -0.28482, -0.152143, -0.719885, -0.869386, -0.745598, 0.823947, 0.473183, -0.331337, 0.187631, 0.0426571, -0.826897, -0.755085, -0.472453, -0.0233656, 0.0483436, 0.933418, -0.961974, 0.0125783, 0.219742, 0.342604, -0.15166, 0.0934905, 0.783221, 0.129664, 0.838844, -0.271388, 0.924519, 0.342843, 0.274418, 0.350817, 0.841638, -0.543993, -0.00283395, -0.128467, -0.682943, -0.319117, 0.84634, 0.283003, 0.32865, 0.0293755, -0.0335696, 0.591266, -0.0743476, -0.741271, 0.462056, -0.583625, -0.590183, 0.6234, 0.535269, -0.670818, -0.955642, -0.770173, 0.479986, 0.664377, 0.399445, -0.968874, -0.276263, -0.901951, 0.544104, -0.958981, 0.482658, -0.807284, 0.305369, -0.947818, 0.827498, -0.382887, -0.805741, -0.796678, -0.299804, -0.229828, 0.818783, -0.103055, -0.45568, -0.227827, 0.543743, -0.96073, 0.946747, -0.857182, -0.96426, -0.292411, -0.715614, 0.765278, -0.475043, -0.590142, -0.238507, 0.673002, -0.473357, -0.319626, 0.936014, 0.486607, 0.580844, 0.425352, -0.800994, 0.290763, -0.494953, -0.441162, 0.718677, -0.828427, 0.96965, 7.53637e-05, -0.699973, -0.526886, -0.352682, 0.799466, 0.332789, 0.723389, 0.407659, -0.934084, -0.284705, 0.961484, -0.700395, -0.985808, -0.595342, -0.691721, 0.49448, -0.0842649, 0.0390966, 0.298938, -0.128094, -0.97158, 0.86393, 0.270606, -0.468986, -0.256605, 0.47215, -0.273117, -0.590343, -0.826529, -0.725381, -0.194821, -0.259661, -0.0949207, -0.180302, 0.0446834, -0.222133, -0.40393, 0.295772, -0.92949, 0.580079, -0.169856, 0.330311, 0.0173551, -0.635823, 0.475942, 0.907175, 0.242777, -0.512208, 0.362463, 0.0496289, 0.65171, 0.990057, 0.690733, -0.469013, -0.101311, -0.68372, -0.157841, -0.677711, -0.708224, -0.659437, -0.407607, 0.677033, 0.89032, 0.228307, -0.749514, 0.772958, 0.054701, 0.551705, 0.917052, -0.895022, -0.702397, 0.484142, 0.108648, 0.833347, 0.478872, -0.984112, 0.387176, -0.73299, 0.7526, 0.443312, -0.0987856, 0.125415, 0.10876, -0.498108, 0.43209, 0.344609, 0.928941, -0.130732, -0.0569167];
    let op3_expect = [-0.11567169, -0.6441946, 0.38081443, 0.8101331, -0.2176516, -1.7933427, 2.3528812, 0.30820447, 1.3914402, -2.1617756, 2.0193734, -1.9506074, 1.0879906, 1.0740494, -0.8817042, 2.3165722, 1.8545072, 0.35320133, 0.34729046, -0.4143384, -0.4655347, 0.9535755, 1.1644995, -1.4373767, -0.8242685, 1.2588899, -0.13599268, -0.33607304, -0.16841233, 0.33871537, 0.12611145, 0.34410077, 0.1784727, 1.3207402, 0.9626355, 0.70549333, 0.7961694, -0.982072, -0.77825814, -0.38172066, 0.04971144, -0.94104725, 1.2876678, -0.20953178, 1.2283568, -0.79611224, 0.9586508, 0.48347974, 0.5865191, -0.0783453, -0.72461325, 0.81034994, 0.23700523, 2.2691784, -1.2258635, 0.8301677, -0.9607419, -1.654197, 1.8816817, -0.76127887, -0.1002655, 1.6887734, 2.2300117, 1.0470784, 1.3434196, 0.86667556, 1.0738976, -0.5545911, -0.11807737, -0.23221764, 0.7409624, 1.6337054];

    let type0 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 8, 8, 3]};
    let type1 = {type: nn.TENSOR_FLOAT32, dimensions: [3, 3, 2, 3]};
    let type2 = {type: nn.TENSOR_FLOAT32, dimensions: [3]};
    let type3 = {type: nn.INT32};
    let type4 = {type: nn.TENSOR_FLOAT32, dimensions: [1, 4, 6, 3]};
    let type4_length = product(type4.dimensions);

    let op1 = operandIndex++;
    model.addOperand(type0);
    let op2 = operandIndex++;
    model.addOperand(type1);
    let bias = operandIndex++;
    model.addOperand(type2);
    let pad = operandIndex++;
    model.addOperand(type3);
    let rate_w = operandIndex++;
    model.addOperand(type3);
    let rate_h = operandIndex++;
    model.addOperand(type3);
    let act = operandIndex++;
    model.addOperand(type3);
    let op3 = operandIndex++;
    model.addOperand(type4);

    model.setOperandValue(op2, new Float32Array([-0.966213, -0.579455, -0.684259, 0.738216, 0.184325, 0.0973683, -0.176863, -0.23936, -0.000233404, 0.055546, -0.232658, -0.316404, -0.012904, 0.320705, -0.326657, -0.919674, 0.868081, -0.824608, -0.467474, 0.0278809, 0.563238, 0.386045, -0.270568, -0.941308, -0.779227, -0.261492, -0.774804, -0.79665, 0.22473, -0.414312, 0.685897, -0.327792, 0.77395, -0.714578, -0.972365, 0.0696099, -0.82203, -0.79946, 0.37289, -0.917775, 0.82236, -0.144706, -0.167188, 0.268062, 0.702641, -0.412223, 0.755759, 0.721547, -0.43637, -0.274905, -0.269165, 0.16102, 0.819857, -0.312008]));
    model.setOperandValue(bias, new Float32Array([0, 0, 0]));
    model.setOperandValue(pad, new Int32Array([2]));
    model.setOperandValue(rate_w, new Int32Array([2]));
    model.setOperandValue(rate_h, new Int32Array([2]));
    model.setOperandValue(act, new Int32Array([0]));

    model.addOperation(nn.ATROUS_CONV_2D, [op1, op2, bias, pad, rate_w, rate_h, act], [op3]);
    model.identifyInputsAndOutputs([op1], [op3]);
    await model.finish();

    let compilation = await model.createCompilation();
    compilation.setPreference(getPreferenceCode(options.prefer));
    await compilation.finish();

    let execution = await compilation.createExecution();

    let op1_input = new Float32Array(op1_value);
    execution.setInput(0, op1_input);

    let op3_output = new Float32Array(type4_length);
    execution.setOutput(0, op3_output);

    await execution.startCompute();

    for (let i = 0; i < type4_length; ++i) {
        assert.isTrue(almostEqualCTS(op3_output[i], op3_expect[i]));
    }
  });
});
