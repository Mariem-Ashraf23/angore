

 export let allData=[];

 export async function getGames()
{

  const options = {
      method: 'GET',
      headers: {
          'x-rapidapi-key': '284b4145e4msh115c17b93c43db4p186650jsn7f8f702154b5',
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
  };
  



const api=await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter', options);
const response=await api.json();

console.log(response);
allData=response;
displayData()
}
getGames()


     function displayData()
  {
       let cartouna='';
      for(let i=0;i<allData.length;i++)
          {
            cartouna+=`
  <div class=" col-md-3 rounded mt-5 g-3">
            
<div class="card w-100 border border-black">
    <img src="${allData[i].thumbnail}" class="card-img-top w-75 rounded mx-auto d-block" alt="...">
  
    <div class="card-body ">
        <a href="#" class="demo btn text-center d-flex flex-row-reverse float-end text-white text-center">free</a>
      <h6 class="card-title text-white">${allData[i].title}</h6>
      <p class="card-text text-center text-secondary">${allData[i].short_description}</p>
     <div class="card-footer">
        <button type="button" class="item btn text-white"
        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
  ${allData[i].genre}
</button>
<button type="button" class="item btn text-white float-end"
        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
  ${allData[i].platform}
</button>
     </div>
    </div>
  </div>
        </div>
        
              `
          }

document.getElementById('demo').innerHTML=cartouna;

  }


  let allDetails=[];

 async function getDetails() {

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '284b4145e4msh115c17b93c43db4p186650jsn7f8f702154b5',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };


  const detailsApi=await fetch('https://free-to-play-games-database.p.rapidapi.com/api/game?id=452',options);
  const response=await detailsApi.json();
  console.log(response);
  allDetails=response
  displyDetails()
 }
 getDetails()

function displyDetails() {
  let box='';

  for(var i=0;i<allDetails.length;i++)
    {

        box+=`    
  
     <div class="container">
        <div class="row" >
          <div class="story" id="story">
            <img src="${allDetails[i].image}" alt="">
          </div>
          <div class="history " id="history">
            <h3 class="fs-4 fw-bold text-white">Title:${allDetails[i].title}</h3>
            <h6 class="fw-bold text-white">Category:${allDetails[i].genre}</h6>
            <br>
            <h6 class="fw-bold text-white">Platform:${allDetails[i].platform}</h6>
            <br>
            <h6 class="fw-bold text-white">Status:${allDetails[i].status}</h6>
            <br>
            <p class="text-white">${allDetails[i].description}</p>
            <button type="button" class="btn btn-outline-warning text-white">Show Game</button>
          </div>
        </div>
      </div>
 
        
       
   
    </div>
      
        `
  
  

    }

document.getElementById('item').innerHTML=box;

}