document.addEventListener("DOMContentLoaded", function () {

  // 各ラジオチャンネルのURL
  const channels = [
    "<source src='http://37.220.36.53:7904/;?type=http&amp;nocache=18236' type='audio/mpeg'>"
    ,"<source src='http://ststmks.s3.amazonaws.com/izakayasound/media/kitanohomare.mp3'>"
    ,"<source src='http://uk2.internet-radio.com:8024//stream?type=http&nocache=541'>"
    ,"<source src='http://uk1.internet-radio.com:8267/stream?type=http&nocache=541'>"
    ,"<source src='http://media-ice.musicradio.com/HeartSussexMP3'>"
    ,"<source src='http://64.71.79.181:8024/;'>"
    ,"<source src='http://bluford.torontocast.com:8504/;'>"
    ,"<source src='http://musicbird.leanstream.co/JCB076-MP3?args=tunein_02'>"
    ,"<source src='http://bigrradio.cdnstream1.com/5174_128'>"
    ,"<source src='http://hyades.shoutca.st:8043/stream'>"
    ,"<source src='http://itori.animenfo.com:443/;'>"
    ,"<source src='http://144.217.64.13:7100/;?type=http&amp;nocache=18238' type='audio/mpeg'>"
    ,"<source src='http://184.75.223.178:8102/;?type=http&amp;nocache=18236' type='audio/mpeg'>"
    ,"<source src='http://51.15.76.3:80/;?type=http&amp;nocache=18237' type='audio/mpeg'>"
    ,"<source src='http://50.7.130.2:13014/;?type=http&amp;nocache=18239' type='audio/mpeg'>"
    ,"<source src='http://94.23.67.172:8010/;?type=http&amp;nocache=18240' type='audio/mpeg'>"
    ,"<source src='http://212.3.234.219:8080/wr-test-128.mp3' type='audio/mpeg'>"
    ,"<source src='http://51.15.76.3:80/;?type=http&amp;nocache=18237' type='audio/mpeg'>"
    ,"<source src='http://ice3.somafm.com/deepspaceone-128-mp3' type='audio/mpeg'>"
    ,"<source src='https://streamer.radio.co/s2c3cc784b/listen' type='audio/mpeg'>"
    ,"<source src='http://50.7.130.2:13014/;?type=http&amp;nocache=18239' type='audio/mpeg'>"
    ,"<source src='http://94.23.67.172:8010/;?type=http&amp;nocache=18240' type='audio/mpeg'>"
    ,"<source src='http://212.18.63.135:9034/;?type=http&amp;nocache=18242' type='audio/mpeg'>"
    ,"<source src='http://158.69.38.195:20278/;?type=http&amp;nocache=18243' type='audio/mpeg'>"
    ,"<source src='http://149.56.74.125:9628/;?type=http&amp;nocache=18244' type='audio/mpeg'>"
    ,"<source src='http://192.240.102.198:14150/;?type=http&amp;nocache=18245' type='audio/mpeg'>"
    ,"<source src='http://5.178.87.156:2068/;?type=http&amp;nocache=18247' type='audio/mpeg'>"
    ,"<source src='http://192.99.38.174:9342/;?type=http&amp;nocache=18249' type='audio/mpeg'>"
    ,"<source src='http://87.229.24.114:35110/;?type=http&amp;nocache=18250' type='audio/mpeg'>"
    ,"<source src='http://46.105.171.217:8024/;?type=http&amp;nocache=18251' type='audio/mpeg'>"
    ,"<source src='http://78.31.65.20:8080/;?type=http&amp;nocache=18252' type='audio/mpeg'>"
    ,"<source src='http://50.117.1.60:80/;?type=http&amp;nocache=18255' type='audio/mpeg'>"
    ,"<source src='http://151.80.97.38:8224/;?type=http&amp;nocache=18256' type='audio/mpeg'>"
    ,"<source src='http://167.114.251.212:80/;?type=http&amp;nocache=18258' type='audio/mpeg'>"
    ,"<source src='http://94.23.66.155:8080/;?type=http&amp;nocache=18259' type='audio/mpeg'>"
    ,"<source src='http://178.162.208.117:8418/;?type=http&amp;nocache=18260' type='audio/mpeg'>"
    ,"<source src='http://149.56.74.125:9508/;?type=http&amp;nocache=18262' type='audio/mpeg'>"
    ,"<source src='http://82.199.155.117:8000/;?type=http&amp;nocache=18263' type='audio/mpeg'>"
    ,"<source src='http://109.123.70.138:8136/;?type=http&amp;nocache=18264' type='audio/mpeg'>"
    ,"<source src='http://94.75.227.133:7005/;?type=http&amp;nocache=18265' type='audio/mpeg'>"
    ,"<source src='http://192.151.153.234:9968/;?type=http&amp;nocache=18268' type='audio/mpeg'>"
    ,"<source src='http://185.66.249.48:9600/;?type=http&amp;nocache=18269' type='audio/mpeg'>"
    ,"<source src='http://50.97.94.44:8086/;?type=http&amp;nocache=18271' type='audio/mpeg'>"
    ,"<source src='http://149.56.147.197:8231/;?type=http&amp;nocache=18273' type='audio/mpeg'>"
    ,"<source src='http://78.46.73.91:9043/;?type=http&amp;nocache=18274' type='audio/mpeg'>"
    ,"<source src='https://cdn-beta.tunein.com/assets/media/blank.mp3' type='audio/mpeg'>"
    ,"<source src='http://85.10.198.55:8000/;?type=http&amp;nocache=18276' type='audio/mpeg'>"
    ,"<source src='http://37.220.36.53:7904/;?type=http&amp;nocache=18277' type='audio/mpeg'>"
    ,"<source src='http://51.15.76.3:80/;?type=http&amp;nocache=18278' type='audio/mpeg'>"
    ,"<source src='https://vapor.fm:8000/stream' type='audio/mpeg'>"
    ,"<source src='https://streaming-01.xtservers.com:7000/stream"
    ,"<source src='http://216.235.89.171:80/officemix' type='audio/mpeg'"
    ,"<source src='https://sslstream.okradio.net:80/' type='audio/mpeg'"
    ,"<source src='http://stream.antenne.de:80/antenne' type='audio/mpeg'"
    ,"<source src='http://5.249.160.143:8000/' type='audio/mpeg'"
    ,"<source src='http://216.55.141.189:8653/stream' type='audio/mpeg'"
    ,"<source src='http://RaDio.mETaLmuSic.Net:80/128K.mp3' type='audio/mpeg'"
    ,"<source src='https://radio.stereoscenic.com:443/asp-h' type='audio/mpeg'"
    ,"<source src='https://streaming-01.xtservers.com:7000/stream' type='audio/mpeg'"
    ,"<source src='http://185.33.21.112:80/chilloutlounge_128' type='audio/mpeg'"
      // 必要に応じて他のソースを追加
  ];
  const container = document.getElementById("radio-buttons");

  // ラジオボタンを60個生成
  for (let i = 0; i < 60; i++) {
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "checkit";
      input.className = "radiobox-tremolo";
      input.id = `radio-${i + 1}`;
      input.dataset.channelIndex = i; // チャンネルインデックスをデータ属性として保持

      container.appendChild(input);
  }

  // イベントリスナーをコンテナに追加（イベント委任）
  container.addEventListener("click", function (event) {
      if (event.target && event.target.matches("input[type='radio']")) {
          const index = event.target.dataset.channelIndex;
          const audioContainer = document.getElementById("music");

          if (channels[index]) {
              // innerHTMLを使ってaudioタグを再作成
              audioContainer.innerHTML = "<audio id='music' preload='none' autoplay='true'>" + channels[index] + "</audio>";
          } else {
              audioContainer.innerHTML = "";
          }
      }
  });
});



/* var ch_list=[
  "<source src='http://37.220.36.53:7904/;?type=http&amp;nocache=18236' type='audio/mpeg'>"
  ,"<source src='http://ststmks.s3.amazonaws.com/izakayasound/media/kitanohomare.mp3'>"
  ,"<source src='http://uk2.internet-radio.com:8024//stream?type=http&nocache=541'>"
  ,"<source src='http://uk1.internet-radio.com:8267/stream?type=http&nocache=541'>"
  ,"<source src='http://media-ice.musicradio.com/HeartSussexMP3'>"
  ,"<source src='http://64.71.79.181:8024/;'>"
  ,"<source src='http://bluford.torontocast.com:8504/;'>"
  ,"<source src='http://musicbird.leanstream.co/JCB076-MP3?args=tunein_02'>"
  ,"<source src='http://bigrradio.cdnstream1.com/5174_128'>"
  ,"<source src='http://hyades.shoutca.st:8043/stream'>"
  ,"<source src='http://itori.animenfo.com:443/;'>"
  ,"<source src='http://144.217.64.13:7100/;?type=http&amp;nocache=18238' type='audio/mpeg'>"
  ,"<source src='http://184.75.223.178:8102/;?type=http&amp;nocache=18236' type='audio/mpeg'>"
  ,"<source src='http://51.15.76.3:80/;?type=http&amp;nocache=18237' type='audio/mpeg'>"
  ,"<source src='http://50.7.130.2:13014/;?type=http&amp;nocache=18239' type='audio/mpeg'>"
  ,"<source src='http://94.23.67.172:8010/;?type=http&amp;nocache=18240' type='audio/mpeg'>"
  ,"<source src='http://212.3.234.219:8080/wr-test-128.mp3' type='audio/mpeg'>"
  ,"<source src='http://51.15.76.3:80/;?type=http&amp;nocache=18237' type='audio/mpeg'>"
  ,"<source src='http://ice3.somafm.com/deepspaceone-128-mp3' type='audio/mpeg'>"
  ,"<source src='https://streamer.radio.co/s2c3cc784b/listen' type='audio/mpeg'>"
  ,"<source src='http://50.7.130.2:13014/;?type=http&amp;nocache=18239' type='audio/mpeg'>"
  ,"<source src='http://94.23.67.172:8010/;?type=http&amp;nocache=18240' type='audio/mpeg'>"
  ,"<source src='http://212.18.63.135:9034/;?type=http&amp;nocache=18242' type='audio/mpeg'>"
  ,"<source src='http://158.69.38.195:20278/;?type=http&amp;nocache=18243' type='audio/mpeg'>"
  ,"<source src='http://149.56.74.125:9628/;?type=http&amp;nocache=18244' type='audio/mpeg'>"
  ,"<source src='http://192.240.102.198:14150/;?type=http&amp;nocache=18245' type='audio/mpeg'>"
  ,"<source src='http://5.178.87.156:2068/;?type=http&amp;nocache=18247' type='audio/mpeg'>"
  ,"<source src='http://192.99.38.174:9342/;?type=http&amp;nocache=18249' type='audio/mpeg'>"
  ,"<source src='http://87.229.24.114:35110/;?type=http&amp;nocache=18250' type='audio/mpeg'>"
  ,"<source src='http://46.105.171.217:8024/;?type=http&amp;nocache=18251' type='audio/mpeg'>"
  ,"<source src='http://78.31.65.20:8080/;?type=http&amp;nocache=18252' type='audio/mpeg'>"
  ,"<source src='http://50.117.1.60:80/;?type=http&amp;nocache=18255' type='audio/mpeg'>"
  ,"<source src='http://151.80.97.38:8224/;?type=http&amp;nocache=18256' type='audio/mpeg'>"
  ,"<source src='http://167.114.251.212:80/;?type=http&amp;nocache=18258' type='audio/mpeg'>"
  ,"<source src='http://94.23.66.155:8080/;?type=http&amp;nocache=18259' type='audio/mpeg'>"
  ,"<source src='http://178.162.208.117:8418/;?type=http&amp;nocache=18260' type='audio/mpeg'>"
  ,"<source src='http://149.56.74.125:9508/;?type=http&amp;nocache=18262' type='audio/mpeg'>"
  ,"<source src='http://82.199.155.117:8000/;?type=http&amp;nocache=18263' type='audio/mpeg'>"
  ,"<source src='http://109.123.70.138:8136/;?type=http&amp;nocache=18264' type='audio/mpeg'>"
  ,"<source src='http://94.75.227.133:7005/;?type=http&amp;nocache=18265' type='audio/mpeg'>"
  ,"<source src='http://192.151.153.234:9968/;?type=http&amp;nocache=18268' type='audio/mpeg'>"
  ,"<source src='http://185.66.249.48:9600/;?type=http&amp;nocache=18269' type='audio/mpeg'>"
  ,"<source src='http://50.97.94.44:8086/;?type=http&amp;nocache=18271' type='audio/mpeg'>"
  ,"<source src='http://149.56.147.197:8231/;?type=http&amp;nocache=18273' type='audio/mpeg'>"
  ,"<source src='http://78.46.73.91:9043/;?type=http&amp;nocache=18274' type='audio/mpeg'>"
  ,"<source src='https://cdn-beta.tunein.com/assets/media/blank.mp3' type='audio/mpeg'>"
  ,"<source src='http://85.10.198.55:8000/;?type=http&amp;nocache=18276' type='audio/mpeg'>"
  ,"<source src='http://37.220.36.53:7904/;?type=http&amp;nocache=18277' type='audio/mpeg'>"
  ,"<source src='http://51.15.76.3:80/;?type=http&amp;nocache=18278' type='audio/mpeg'>"
  ,"<source src='https://vapor.fm:8000/stream' type='audio/mpeg'>"
  ]



function a(value){
let ch = document.getElementById('music');
//console.log(value);
ch.innerHTML = `<audio id='music' preload='none' autoplay='true'>${ch_list[value]}</audio>`
} 
*/