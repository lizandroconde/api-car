import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import styled from 'styled-components'
export default function Home() {
  return (
    <>
     <Data dangerouslySetInnerHTML={{__html:`
        <header>
        <div class="logo-container"> CuscoCar</div>
        <nav class="nav-bar">
            <ul>
                
                <li><a href="/singup">Registrase</a></li>
                <li><a href="/login">Iniciar Sesion</a></li>
            </ul>
        </nav>

    </header>


    <main>
        <section class="intro">
            <div class="intro-img"> <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/illustration-intro.png" alt="illustration-intro"></div>
            <div class="intro-content">
                <h1> All your files in one secure location, accessible anywhere.</h1>

                <p class="lg-p mt-2">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.
                </p>
                <button class="btn mt-2"> Get Started</button></div>


        </section>
        <section class="features">

            <div class="features-item">
                <div class="features-item-head"> <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-access-anywhere.svg" alt=""> </div>
                <div class="features-item-body  mt-2">
                    <h3>Access your files, anywhere</h3>

                    <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
                </div>
            </div>

            <div class="features-item">
                <div class="features-item-head"> <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-security.svg" alt=""> </div>
                <div class="features-item-body mt-2">
                    <h3> Security you can trust</h3>
                    <p> 2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
                </div>

            </div>
            <div class="features-item">
                <div class="features-item-head"> <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-collaboration.svg" alt=""> </div>
                <div class="features-item-body  mt-2">
                    <h3> Real-time collaboration</h3>
                    <p> Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                </div>

            </div>
            <div class="features-item">
                <div class="features-item-head"> <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-any-file.svg" alt=""> </div>
                <div class="features-item-body  mt-2">
                    <h3> Store any type of file</h3>
                    <p> Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
                </div>
            </div>
        </section>
        <section class="productive">
            <div class="productive-img"> <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/illustration-stay-productive.png" alt=""> </div>

            <div class="productive-content">

                <h2>Stay productive, wherever you are</h2>

                <p class="lg-p"> Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs. </p>

                <p class="lg-p"> Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
                </p>
                <p class="lg-p"> <a class="content-link" href="#">See how Fylo works <i class="fas fa-arrow-alt-circle-right"></i></a> </p>
            </div>
        </section>

        <section class="testimonial">

            <div class="testimonial-item">
                <div class="testimonial-item-text">
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                </div>
                <div class="testimonial-item-reviewer">
                    <div class="testimonial-item-reviewer-img"> <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/profile-1.jpg" alt=""></div>
                    <div class="ml-1 testimonial-item-reviewer-text">
                        <h4>Satish Patel</h4>
                        <p>Founder & CEO, Huddle</p>
                    </div>
                </div>
            </div>


            <div class="testimonial-item">
                <div class="testimonial-item-text">
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                </div>
                <div class="testimonial-item-reviewer">
                    <div class="testimonial-item-reviewer-img"> <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/profile-2.jpg" alt=""></div>
                    <div class="ml-1 testimonial-item-reviewer-text">
                        <h4> Bruce McKenzie </h4>
                        <p>Founder & CEO, Huddle</p>
                    </div>
                </div>
            </div>

            <div class="testimonial-item">
                <div class="testimonial-item-text">
                    <p> Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                </div>
                <div class="testimonial-item-reviewer">
                    <div class="testimonial-item-reviewer-img"> <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/profile-3.jpg" alt=""></div>
                    <div class="ml-1 testimonial-item-reviewer-text">
                        <h4> Iva Boyd</h4>
                        <p>Founder & CEO, Huddle</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="cta">

            <div class="cta-item">
                <div class="cta-text">
                    <h2>Get early access today </h2>
                    <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                </div>
                <form class="cta-form mt-2" action="">
                    <input class="input-block" type="text" placeholder="example@email.com"> <button class="btn-block">Get Started For Free</button> </form>
            </div>
        </section>
    </main>
    <footer>
        <section class="contact-info">

            <div class="contact-info-logo"> <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/logo.svg" alt=""> </div>
            <div class="contact-info-location">
                <div class="contact-info-location-item">
                    <img class="img-footer" src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-location.svg" alt="">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
            </div>
            <div class="contact-info-contacts">
                <div class="contact-info-contacts-item">
                    <img class="img-footer" src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-phone.svg" alt="">
                    <p>+1-543-123-4567</p>
                </div>
                <div class="contact-info-contacts-item ">

                    <img class="img-footer" src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-email.svg" alt="">
                    <p>example@fylo.com</p>
                </div>

            </div>
            <nav class="contact-info-links">
                <ul class="contact-info-links-list">
                    <li> <a href="#">About Us</a> </li>
                    <li> <a href="#">Jobs</a> </li>
                    <li> <a href="#">Press</a> </li>
                    <li> <a href="#">Blog</a> </li>
                </ul>
                <ul class="contact-info-links-list">
                    <li> <a href="#">Contact Us</a> </li>
                    <li> <a href="#">Terms</a> </li>
                    <li> <a href="#">Privacy</a> </li>
                </ul>
            </nav>
            <div class="contact-info-social-links">
                <a class="icon-link" href="#">
                    <div class="contact-info-social-link-item flex-center"> <i class="fab fa-facebook-f"></i></div>
                </a>
                <a class="icon-link" href="#">
                    <div class="contact-info-social-link-item flex-center"> <i class="fab fa-twitter"></i></div>
                </a>
                <a class="icon-link" href="#">
                    <div class="contact-info-social-link-item flex-center"> <i class="fab fa-instagram"></i> </div>
                </a>
            </div>
            <div class="attribution-container">
                <p class="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://codepen.io/devhannah">Hannah</a>.
                </p>
            </div>


        </section>


    </footer>
     `}} />
    </>
  )
}


const Data = styled.div`
 
  :root {
    --primary-color-dark-blue-1: hsl(217, 28%, 15%);
    --primary-color-dark-blue-2: hsl(218, 28%, 13%);
    --primary-color-dark-blue-3: hsl(216, 53%, 9%);
    --primary-color-dark-blue-4: hsl(219, 30%, 18%);
    --accent-color-cyan: hsl(176, 68%, 64%);
    --accent-color-blue: hsl(198, 60%, 50%);
    --neutral-color-white: hsl(0, 0%, 100%);
    --font-heading: 'Raleway', sans-serif;
    --font-body: 'Open Sans', sans-serif;
    --padding-sm: 2.5rem 2rem;
    --padding-md: 3.5rem 3rem;
    --padding-lg: 4.5rem 4rem;
    --padding-footer: 15rem 4rem 1rem;
    --padding-footer-tablet: 20rem 3rem 1rem;
    --padding-footer-mobile: 25rem 3rem 1rem;
}

body {
    background-color: var(--primary-color-dark-blue-2);
    color: var(--neutral-color-white);
    font-family: var(--font-body);
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: var(--font-heading);
    line-height: 1.7;
    font-weight: 700;
}

h1 {
    font-size: 1.7rem;
}

h2 {
    font-size: 1.5rem;
}

h3 {
    font-size: 1.4rem;
}

p {
    font-family: var(--font-body);
    font-size: 14px;
    line-height: 1.7;
    padding: 0.5rem 0;
}

.lg-p {
    font-size: 1rem;
}

a {
    color: var(--neutral-color-white);
    font-family: var(--font-heading);
    text-decoration: none;
}

header {
    display: flex;
    padding: var(--padding-md);
    justify-content: space-between;
}

.nav-bar {
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-bar ul li {
    display: inline-block;
    margin-left: 1rem;
}

a:hover {
    color: var(--accent-color-cyan);
    transition: 600ms;
}

section {
    padding: var(--padding-lg);
}

.intro img,
.productive img {
    width: 100%;
    max-width: 600px;
    height: auto;
}

.intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.intro>div {
    width: 60%;
}

.ml-1 {
    margin-left: 1rem;
}

.mt-2 {
    margin-top: 2rem;
}

button {
    border-radius: 25px;
    background: linear-gradient(50deg, var(--accent-color-cyan), var(--accent-color-blue));
    border: none;
    font-family: var(--font-heading);
    color: var(--neutral-color-white);
    height: 3rem;
    font-weight: 700;
    padding: 0 12px;
}

input {
    height: 3rem;
    padding-left: 12px;
    border: none;
    border-radius: 25px;
    background-color: var(--neutral-color-white);
}

.btn {
    width: 15rem;
    max-width: 80%;
}

button:hover {
    cursor: pointer;
    background: linear-gradient(50deg, var(--accent-color-blue), var(--accent-color-cyan));
}

.features {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.features-item {
    width: 33.33%;
    padding: 2rem 2.5rem;
    text-align: center;
}

.productive {
    display: flex;
    align-items: center;
}

.productive-content {
    padding-left: 4.5rem;
}

.content-link {
    font-family: var(--font-body);
    border-bottom: 1px solid var(--accent-color-cyan);
    color: var(--accent-color-cyan);
}

.content-link:hover {
    color: var(--neutral-color-white);
    transition: 600ms;
    border-bottom-color: var(--white);
}

.testimonial {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.testimonial-item {
    margin-left: 3.5rem;
    flex-basis: 33.33%;
    border-radius: 5px;
    background-color: var(--primary-color-dark-blue-4);
    box-shadow: 2px 2px 20px 2px var(--primary-color-dark-blue-3);
    padding: var(--padding-sm);
}

.testimonial-item:first-child {
    margin-left: 0;
}

.testimonial-item-reviewer {
    display: flex;
    padding-top: 1rem;
}

.testimonial-item-reviewer img {
    border-radius: 50%;
    height: 50px;
    width: 50px;
}

.cta {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cta-item {
    position: absolute;
    top: 50px;
    max-width: 800px;
    width: 66.66%;
    min-width: 300px;
    padding: var(--padding-md);
    box-shadow: 2px 2px 30px 2px var(--primary-color-dark-blue-3);
    background-color: var(--primary-color-dark-blue-4);
    border-radius: 5px;
    text-align: center;
}

.cta-form {
    display: flex;
    justify-content: center;
}

.input-block {
    width: 80%;
    max-width: 600px;
}

.btn-block {
    width: 20%;
    max-width: 250px;
    margin-left: 1rem;
}

.contact-info {
    margin-top: 50px;
    padding: var(--padding-footer);
    display: grid;
    background-color: var(--primary-color-dark-blue-3);
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-template-areas: "logo logo logo logo" "location contacts links social" "attribution attribution attribution attribution";
}

.contact-info>div,
.contact-info>nav {
    padding: 1rem 2.5rem;
}

.contact-info-logo {
    grid-area: logo;
}

.contact-info-location {
    grid-area: location;
}

.contact-info-contacts-item,
.contact-info-location-item {
    display: flex;
}

footer p {
    padding: 0;
}

.img-footer {
    margin-right: 1rem;
    width: 18px;
    height: 18px;
    line-height: 1.5;
}

.contact-info-contacts {
    grid-area: contacts;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contact-info-contacts-item:first-child {
    margin-bottom: 2rem;
}

.contact-info-links {
    grid-area: links;
    display: flex;
    justify-content: center;
}

.contact-info-links-list:first-child {
    margin-right: 2.5rem;
}

.contact-info-links-list li {
    margin-bottom: 1.5rem;
}

.contact-info-social-links {
    display: flex;
    justify-content: flex-end;
    grid-area: social;
}

.contact-info-social-link-item {
    margin-left: 1rem;
    height: 30px;
    width: 30px;
    border: 1px solid var(--neutral-color-white);
    border-radius: 50%;
}

.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

footer i {}

.attribution-container {
    grid-area: attribution;
}

.attribution {
    font-size: 11px;
    text-align: center;
}

.attribution a {
    color: hsl(228, 45%, 44%);
}

@media (max-width: 1000px) {
    header {
        padding: var(--padding-sm);
    }
    header img,
    footer img {
        width: 117px;
        height: auto;
    }
    section {
        padding: var(--padding-sm);
    }
    .intro>div,
    .features-item {
        width: 100%;
    }
    .testimonial,
    .productive {
        flex-direction: column;
    }
    .features-item {
        padding: 2rem 0;
    }
    .productive-content {
        margin-top: 2rem;
        padding: 0;
    }
    .testimonial-item {
        margin-left: 0;
        margin-top: 3.5rem;
        width: 80%;
    }
    .cta-item {
        width: 80%;
        padding: 2.5rem 2rem;
    }
    .cta-form {
        flex-direction: column;
    }
    .input-block {
        max-width: 100%;
        width: auto;
    }
    .btn-block {
        max-width: 100%;
        width: auto;
        min-width: 100%;
        margin-top: 1rem;
        margin-left: 0;
    }
    .contact-info {
        padding: var(--padding-footer-tablet);
        grid-template-columns: 100%;
        grid-template-rows: repeat(6, auto);
        grid-template-areas: "logo" "location" "contacts" "links" "social" " attribution";
    }
    .contact-info>div,
    .contact-info>nav {
        padding: 1rem 0;
    }
    .contact-info-contacts {
        align-items: flex-start;
    }
    .contact-info-links {
        flex-direction: column;
        justify-content: flex-start;
    }
    .contact-info-links-list:first-child {
        margin-bottom: 1rem;
    }
    .contact-info-social-links {
        justify-content: center;
    }
}

@media (max-width: 375px) {
    section {
        padding: var(--padding-sm);
    }
    .cta-item {
        min-width: 50%;
        max-width: 70%;
    }
    .contact-info {
        padding: var(--padding-footer-mobile);
    }
}
`