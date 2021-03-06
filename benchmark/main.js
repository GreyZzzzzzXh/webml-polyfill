const BenchmarkClass = {
  'image_classification': ICBenchmark,
  'object_detection': ODBenchmark,
  'skeleton_detection': SDBenchmark,
  'semantic_segmentation': SSBenchmark,
  'facial_landmark_detection': FLDBenchmark,
  'super_resolution': SRBenchmark,
  'emotion_analysis': EABenchmark
};

async function main() {
  inputElement.setAttribute('class', 'disabled');
  pickBtnElement.setAttribute('class', 'btn btn-primary disabled');
  let logger = new Logger(document.querySelector('#log'));
  logger.group('Benchmark');
  try {
    let configuration = JSON.parse(document.querySelector('#configurations').selectedOptions[0].value);
    configuration.modelName = document.querySelector('#modelName').selectedOptions[0].text;
    configuration.modelClass = document.querySelector('#modelName').selectedOptions[0].className;
    configuration.iterations = Number(document.querySelector('#iterations').value) + 1;
    logger.group('Environment Information');
    logger.log(`${'UserAgent'.padStart(12)}: ${(navigator.userAgent) || '(N/A)'}`);
    logger.log(`${'Platform'.padStart(12)}: ${(navigator.platform || '(N/A)')}`);
    logger.groupEnd();
    logger.group('Configuration');
    Object.keys(configuration).forEach(key => {
      if (key === 'backend') {
        let selectedOpt = preferSelectElement.options[preferSelectElement.selectedIndex];
        let backendName = configuration[key];
        if (configuration[key].indexOf('WebNN') === 0) {
          backendName += ` + ${getNativeAPI(selectedOpt.value)}(${selectedOpt.text})`;
        }
        logger.log(`${key.padStart(12)}: ${backendName}`);
      } else {
        logger.log(`${key.padStart(12)}: ${configuration[key]}`);
      }
    });
    logger.groupEnd();
    logger.group('Run');
    let benchmark = new BenchmarkClass[configuration.modelClass](configuration.modelName, configuration.backend, configuration.iterations);
    benchmark.onExecuteSingle = (i => logger.log(`Iteration: ${i + 1} / ${configuration.iterations}`));
    let summary = await benchmark.runAsync();
    benchmark.finalize();
    logger.groupEnd();
    if (summary.profilingResults && summary.profilingResults.length) {
      logger.group('Profiling');
      summary.profilingResults.forEach((line) => logger.log(line));
      logger.groupEnd();
    }
    logger.group('Result');
    logger.log(`Inference Time: <em style="color:green;font-weight:bolder;">${summary.computeResults.mean.toFixed(2)}+-${summary.computeResults.std.toFixed(2)}</em> [ms]`);
    if (summary.decodeResults) {
      logger.log(`Decode Time: <em style="color:green;font-weight:bolder;">${summary.decodeResults.mean.toFixed(2)}+-${summary.decodeResults.std.toFixed(2)}</em> [ms]`);
    }
    logger.groupEnd();
  } catch (err) {
    logger.error(err);
    logger.groupEnd();
  }
  inputElement.removeAttribute('disabled');
  pickBtnElement.setAttribute('class', 'btn btn-primary');
  logger.groupEnd();
}
