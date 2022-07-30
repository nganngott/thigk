document.getElementById('random').onclick = () => {
    const A = ['Ngân', 'Ngọc', 'Tâm', 'Thảo'];
    const x = Math.round(Math.random()*3);
    document.getElementById("demo").innerHTML = A[x];
}