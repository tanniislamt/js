
function loaddata(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => displaydata(data))
    
  }
    loaddata();
  const displaydata = (data) =>{
    const coldata = document.getElementById("photos");
        data.forEach((post) => {
        
          const postDiv = document.createElement("div");

            postDiv.innerHTML = `
            <div class="card" style="width: 10rem;">
                <img src="image/Tanni..3....jpeg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">${post.id}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
                `;
             coldata.appendChild(postDiv);         


        });


  }


