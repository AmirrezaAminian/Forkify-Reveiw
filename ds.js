const helloW = async function () {
  try {
    const res = await fetch(
      'https://stream.developer-subtitle.info/api/v1/medias/?access-token=HrC1GS8UkTP20T7MmlXbbJnJCO7UfLzc'
    );
    const data = await res.json();
    // console.log(data);
    let response = data.response;
    const dataInfo = response.map(element => `${element.media_id} `);
    console.log(dataInfo.join(' '));

    //  response = {
    //    media_id: response.media_id,
    //    title : response.title
    //  };
  } catch (err) {
    console.error(err);
  }
};
helloW();

var token = 'HrC1GS8UkTP20T7MmlXbbJnJCO7UfLzc';
var xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});
xhr.open(
  'POST',
  'https://stream.developer-subtitle.info/api/v1/medias/download/' +
    '?access-token=' +
    token
);
xhr.send(JSON.stringify({ media_id: 'zwlhaehfjp5r  ', expire_time: 7200 }));
