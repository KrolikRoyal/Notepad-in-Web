let fonts = document.getElementById('fonts');
let sizes = document.getElementById('size');
let weights = document.getElementById('weight');
let text = document.getElementById('text');
let saveButton = document.getElementById('saveButton');

fontSize();
selections();

function selections() {
    fonts.addEventListener('change', function() {
        for (let index = 0; index < fonts.options.length; index++) {
            let font = fonts.options[index].text;

            if(fonts.value == font) {
                text.style.fontStyle = font;
                break;
            }
        }
    });

    sizes.addEventListener('change', function() {
        for (let index = 0; index < sizes.options.length; index++) {
            let size = sizes.options[index].text;

            if(sizes.value == size) {
                text.style.fontSize = size + 'px';
                console.log(size);
                break;
            }
        }
    });

    weights.addEventListener('change', function() {
        for (let index = 0; index < weights.options.length; index++) {

            if(weights.value == weights.options[index].value) {
                text.style.fontWeight = weights.value;
                console.log(weights.value);
                break;
            }
        }
    });
}

saveButton.addEventListener('click', function() {
    let file = 'file';
    let tempLink = document.createElement("a");
    let textArea = document.querySelector("textarea");
    let taBlob = new Blob([textArea.value], {type: 'text/plain'});

    tempLink.setAttribute('href', URL.createObjectURL(taBlob));

    tempLink.setAttribute('download', `${file.toLowerCase()}.txt`);
  
    tempLink.click();
  
    URL.revokeObjectURL(tempLink.href);
});

function fontSize() {
    for (let index = 8; index <= 72; index++) {
        let option = document.createElement('option');
        option.textContent = option.value = index;
        size.append(option);
    }
}