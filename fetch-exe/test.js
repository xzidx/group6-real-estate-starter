const sectionPropertiesElement = document.getElementById(Selection)
    fetch("public/data/properties.json")
    .then((v1)=> v1.json())
    .then((data) => {
        if (data.length>0){
            for(let n=0;n<4; n++){
                Selection.innerHTML += `
                <a calass`
            }
        }
    })