export function Form(){
    const d = document,
    $form = d.createElement('form');

    d.addEventListener("submit", async (e) => {
        e.preventDefault();
        if(!e.target.classList[0] == 'contactForm') return false;
        const formData = new FormData(e.target);
        $form.dataset.msg = 'Loading...';
        $form.classList.add('loadingMsg');

        await fetch("https://formsubmit.co/ajax/nicolasvillagran321@gmail.com", {
            method: "POST",
            body: JSON.stringify({
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                msg: formData.get('message'),
            }),
            headers:{'Content-type': 'application/json; charset=UTF-8'},
        }).then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => {
            // console.log(json);
            $form.dataset.msg = 'The message has been sent successfully'; //until msg.
            $form.classList.replace('loadingMsg', 'goodMsg');
            $form.reset();
        })
        .catch(err => {
            console.log(err);
            $form.dataset.msg = 'There was an error at the sending data';
            $form.classList.replace('loadingMsg', 'badMsg');
        })

        setTimeout(()=>{e.target.classList.remove('goodMsg');}, 2000)
    });

    $form.setAttribute('data-msg', 'This is a test form, the data has not really been sent, since the form is not activated.');
    $form.setAttribute('name', 'formTest');
    $form.classList.add('contactForm', 'loadingMsg');
    $form.innerHTML = `
        <!--<label>Enter your name:</label><br><br>-->
        <input class="actived" type="text" name="name" placeholder="Enter your name" title="Name just accepts words and white spaces" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>
        <br><br>
        <!--<label>Enter your email:</label><br><br>-->
        <input class="actived" type="email" name="email" placeholder="Enter your email" title="Wrong email" pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required>
        <br><br>
        <input class="actived" type="text" name="subject" placeholder="Subject" title="The subject is required" required>
        <br><br>
        <textarea name="message" cols="30" rows="10" placeholder="Enter your comments" title="Your comment cannot exceed 255 characters" data-pattern="^.{1,255}$" required></textarea>
        <br><br>
        <input type="submit" name="btn-send" value="Send-POST" id='submit'>
    `;


    setTimeout(()=>{
        let alertMsg = d.querySelector('.loadingMsg');
        alertMsg.setAttribute('data-msg', '');
        alertMsg.classList.remove('loadingMsg');
    }, 2000)
    // $form.innerHTML = `
    // <legend>Send your Comments</legend>
    // <input type="text" name="name" placeholder="Enter your name" title="Name just acepts letters and white spaces" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>
    // <input type="email" name="email" placeholder="Enter your email" title="Wrong email" pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required>
    // <input type="text" name="subject" placeholder="Subject" title="The subject is required" required>
    // <textarea name="comments" cols="30" rows="10" placeholder="Enter your comments" title="Your comment cannot exceed 255 characters" data-pattern="^.{1,255}$" required></textarea>
    // <input type="submit" value="Send">

    // <div class="contact-form-loader none">
    //     <img src="assets/loader.svg" alt="Loading">
    // </div>
    // <div class="contact-form-response none">
    //     <p>The data has been sent</p>
    // </div>
    // `;

    return $form;
};