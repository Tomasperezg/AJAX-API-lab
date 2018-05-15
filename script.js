$.get(`https://www.reddit.com/r/aww/.json`).then(function (json) {

    let text = json.data.children;
	  let target = $("#title1");

      for(i=0;i<10;i++){
        var titles  = text[i].data.title;
        var urls = text[i].data.url;
        target.append(`<a href = ${text[i].data.url}><p>${i}</p><img src="${text[i].data.thumbnail}"/></a>`);
        $(target.append(titles)).css({"color": "blue", "display":"block", "margin-bottom": "20px"});
        $(target.append(urls)).css({"color": "black"});
      }
    }).fail(() => {
      console.log("something went wrong!!");
    }).always(() => {
      console.log("i will always run!");
    });
