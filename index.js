let censor = () => {
    const censoredArr = [];
    return (txt1,txt2 = '') => {
        if(txt2) {
            censoredArr.push([txt1, txt2])
        } else {
            for(let pair of censoredArr) {
                txt1 = txt1.replace(new RegExp(pair[0], 'gi'), pair[1])
            }
            return txt1
        }
    }
}

let change = censor();

change('lorem', 'Murka');
change('1960', '1920')

console.log(change(' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'))