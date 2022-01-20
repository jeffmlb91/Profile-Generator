function boardManager(manager) {
    return`
    <div class="col-md-3">       
    <div class="card">
    <div class="car-title">
    <p> ${manager[0].name}</p>
    <p> <i class="fas fa-mug-hot"></i> Manager</p>
    </div>
    <div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">ID: ${manager[0].id}</li>
    <li class="list-group-item">Email: <a href="mailto:" ${manager[0].email}> ${manager[0].email}</a></li>
    <li class="list-group-item">Office Number: ${manager[0].officeNum}</li>
    </ul>
    </div>
    </div>
    </div>    
    `;
}