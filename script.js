$.get("https://www.reddit.com/r/aww/.json").then(function (json) {

    let text = json.data.children;
	   let target = $("#title1");
      // console.log(json.data.children);
      // document.getElementById('title1').innerHTML = (json.data.children[0].data.title);
      for(i=0;i<10;i++){
        var titles  = text[i].data.title;
        var urls = text[i].data.url;
        target.append(`<a href = ${text[i].data.url}><p>${i}</p><img src="${text[i].data.thumbnail}"/></a>`);
        $(target.append(titles)).css({"color": "blue", "display":"block", "margin-bottom": "20px"});
        target.append(urls);
      }
    });
