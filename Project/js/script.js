const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('header nav');


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x'); // اضافة او ازالة كلاس
    navBar.classList.toggle('active');
});

// remove active for all links
const activePage = ()=>{
    const barsBox = document.querySelector('.bars-box'); // عند التنقل بين الاقسام 
    const header = document.querySelector('header'); 

    navLinks.forEach(link=>{
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');// عشان يخفي ال nav 
    setTimeout(()=>{
        barsBox.classList.add('active');
        
    },1100);

    header.classList.remove('active'); // عشان يخفي ال header 
    setTimeout(()=>{
        header.classList.add('active');
        
    },1100);

    sections.forEach(section=>{
        section.classList.remove('active');
    });
    
    menuIcon.classList.remove('bx-x'); // اضافة او ازالة كلاس
    navBar.classList.remove('active');
}

navLinks.forEach((link,idx)=>{
    link.addEventListener('click',()=>{
        if(!link.classList.contains('active')){

            activePage();
            link.classList.add('active');
            // section active
            setTimeout(()=>{
            sections[idx].classList.add('active')
            },1100);
        }
    })
})
// لما ادوس علي logo بيوديني ف اال home
logoLink.addEventListener('click',()=>{
    if(!navLinks[0].classList.contains('active')){
        activePage();
        navLinks[0].classList.add('active');
                    // section active
                    setTimeout(()=>{
                        sections[0].classList.add('active')
                        },1100);
    }
})

const resumeBtn = document.querySelectorAll('.resume-btn');
const resumeDetail = document.querySelectorAll('.resume-detail');

// للتاكد من عدم وجود active علي اي btn
resumeBtn.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{
        resumeBtn.forEach(btn=>{
            btn.classList.remove('active');
        });
        btn.classList.add('active');
        resumeDetail.forEach(detail=>{
            detail.classList.remove('active');
        });
        resumeDetail[idx].classList.add('active');
    });
});

let arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
let arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = ()=>{
    const imgeSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');
    // 2rem => gap in img-slide
    imgeSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
    portfolioDetails.forEach(detail =>{
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click',()=>{
    if(index < 4){
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 5;
        arrowRight.classList.add('disabled');
    }
    activePortfolio ();
});

arrowLeft.addEventListener('click',()=>{
    if(index > 1){
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }
    activePortfolio ();
});
