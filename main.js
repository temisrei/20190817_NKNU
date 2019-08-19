$(function () {
  var sepalLength = $('#sepalLength');
  var sepalWidth = $('#sepalWidth');
  var petalLength = $('#petalLength');
  var petalWidth = $('#petalWidth');
  var iris = '';
  var btnPredict = $('#btnPredict');
  var btnLIFF = $('#btnLIFF');
  var answer = $('#answer');

  liff.init(function (data) {
    console.log(data.context.userId);    //直接取得 userId
  });

  var getIrisData = function () {
    iris = sepalLength.val() + ',' + sepalWidth.val() + ',' + petalLength.val() + ',' + petalWidth.val();
    console.log(iris);
  }

  sepalLength.on('change', getIrisData);
  sepalWidth.on('change', getIrisData);
  petalLength.on('change', getIrisData);
  petalWidth.on('change', getIrisData);

  btnPredict.click(function () {
    getIrisData();
    $.ajax({
      url: "https://a1bdbfab.ngrok.io/api?iris=" + iris,
      success: function (response) {
        console.log(response);
        answer.html(response.result);
      }
    });
  });
});