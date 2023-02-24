const loadMeals = (serchText) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${serchText}`)
        .then(response => response.json())
        .then(data => displayMeals(data.meals));
    // .then(data => console.log(data)); 
}
const displayMeals = meals => {
    // console.log(meals);
    const mealsContaier = document.getElementById('meals-container');
    mealsContaier.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top p-3 img-fluid" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                    to additional
                    content. This content is a little bit longer.</p>
                <!-- Button trigger modal -->
                <button onclick ="loadMealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetailsModal">Details</button>
            </div>
            
        </div>
         `;
        mealsContaier.appendChild(mealDiv)
    });
}
const loadMealDetail = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]));
}
const displayMealDetails = meal => {
    document.getElementById('mealDetailsModalLabel').innerText = meal.strMeal;
    const mealDetails = document.getElementById('mealDetailsBody');
    mealDetails.innerHTML = `
        <img src="${meal.strMealThumb}" class="p-3 img-fluid">
    `;
}

const searchMeals = () => {
    const searchText = document.getElementById('search-field').value;
    loadMeals(searchText)
}
loadMeals('fish');