let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const heightInput = (document.getElementById('height').value);
    const weightInput = (document.getElementById('weight').value);
    const result = document.getElementById('output');

    let height_status = false, weight_status = false;

    // Kiểm tra chiều cao
    const height = parseFloat(heightInput);

    if (isNaN(height) || (height <= 0)) {
        document.getElementById('height-error').innerHTML = "Invalid height.";
    } else {
        document.getElementById('height-error').innerHTML = '';
        height_status = true;
    }

    // Kiểm tra trọng lượng
    const weight = parseFloat(weightInput);
    if (isNaN(weight) || (weight <= 0)) {
        document.getElementById('weight-error').innerHTML = "Invalid weight.";
    } else {
        document.getElementById('weight-error').innerHTML = '';
        weight_status = true;
    }

    // Nếu cả hai giá trị hợp lệ, tính BMI

    if (height_status && weight_status) {
        const bmi = (weight / (height * height)).toFixed(2);
        let bodyType = '';

        // điều kiện phân loại

        if (bmi < 18.5) {
            result.innerHTML = ' Underweight : ' + bmi;
        } else if (bmi < 24.9) {
            result.innerHTML = ' Normal : ' + bmi;
        } else if (bmi < 29) {
            result.innerHTML = ' Overweight: ' + bmi;;
        } else {
            result.innerHTML = ' Obesity ';
        }

        // result.innerHTML = '';

    } else {
        alert('The form has errors');

    }
});