$(function(){
  /*=================================================
  画像切り替え
  ===================================================*/
  // サムネイルの画像をホバーした際の処理
  $('#thumbnail img').on('mouseover', function(){

    // ホバーされた画像のパスを取得
    // $(this)はイベントが発生した要素を指すため、1つ目のサムネイルがホバーされた際は1つ目のsrcを、
    // 2つ目のサムネイルがホバーされた際は2つ目のsrcを取得する
    let img_src = $(this).attr("src");

    // メイン画像と同じサムネイルがホバーされた際は画像切り替えを実行しない
    // （メイン画像のsrcとホバーされた画像のsrcが異なる場合のみ実行）
    if($('#mainvisual img').attr("src") != img_src) {

      // メイン画像を0.5秒かけてフェードアウトし、フェードアウトが完了したら
      // メイン画像のsrcをホバーされたサムネイルのsrcに変更して
      // メイン画像を0.5秒かけてフェードインする
      // ※「フェードアウトが完了した後に実行」のように、何かの処理が終わったあとに実行させたい場合は、
      // 今回のようのコールバック関数を使用します。詳しくは「コールバック関数」で調べてみてください
      $('#mainvisual img').fadeOut(500, function() {
        $("#mainvisual img").attr({src:img_src});
        $("#mainvisual img").fadeIn(500);
      })
    }
  });
});