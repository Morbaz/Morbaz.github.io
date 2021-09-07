
const exerciseList = document.getElementById('exerciseList');
let allExercises = [];

const loadExercises = async () => {
    try {
        const res = await fetch('https://morbaz.github.io/exercises.json');
        allExercises = await res.json();
        displayExercises(allExercises);
    } catch (err) {
        console.error(err);
    }
};

const displayExercises = (exercises) => {
    const htmlString = exercises
        .map((exercise) => {
            return`
            <tr class="table-dark">
            <th scope="row"><iframe src="https://player.vimeo.com/video/${exercise.vimeo_id}?badge=0&amp;autoplay=1;muted=1;loop=1;player_id=0&amp;app_id=58479&amp;h=2e6baaaabe" width="384" height="216" frameborder="0" allow="autoplay; fullscreen; picture-in-picture";allowfullscreen title="${exercise.name}.mp4"></iframe></th>
            <td><h5><small class="text-muted">${exercise.name}</small></h5></td>
            <td>${exercise.muscle_group}</td>
            <td>${exercise.movement_type}</td>
            <td>${exercise.equipment}</td>
            <td>${exercise.chain}</td>
            <td>${exercise.difficulty} 
            <div class="btn-group-vertical">
            <br><br><br><br><br><br>
            <button type="button" class="btn btn-info">ADD</button>
            </div>
            </td>
            </tr>
           


            `;
        })
        .join('');
    exerciseList.innerHTML = htmlString;
};

loadExercises();





//`
          //  <ul>
           // <iframe src="https://player.vimeo.com/video/${exercise.vimeo_id}?badge=0&amp;autoplay=1;muted=1;loop=1;player_id=0&amp;app_id=58479&amp;h=2e6baaaabe" width="384" height="216" frameborder="0" allow="autoplay; fullscreen; picture-in-picture";allowfullscreen title="${exercise.name}.mp4"></iframe>
          //  <h5>${exercise.name}<h5>
           // <h2></h2>
          //  <p class="text-muted">Muscle Group: ${exercise.muscle_group}</p>
         //   <p class="text-muted">Movement Type: ${exercise.movement_type}</p>
         //   <p class="text-muted">Equipment: ${exercise.equipment}</p>
        //    <p class="text-muted">Difficutly:${exercise.difficulty}</p>
        //    </ul>
        //    <br>
        //    `;