let name = [

    {
        name: 'shawon',
        fa_name: 'harun',
        motherName: ' salma bugem',
        sikll: 'javascript developer'
    },

    {
        name: 'sagor',
        fa_name: 'harun',
        motherName: ' salma bugem',
        sikll: 'java developer'
    },


    {
        name: 'siyam',
        fa_name: 'harun',
        motherName: ' salma bugem',
        sikll: 'PHP developer'
    },


    {
        name: 'MIM',
        fa_name: 'harun',
        motherName: ' salma bugem',
        sikll: 'Python developer'
    },



];

localStorage.setItem('name', 'shawon');


const tumi = document.querySelector('.box');

tumi.innerText = 'ami tumi';


const para =  document.getElementsByTagName('div');

para[0].innerHTML = `

<h1> Tumi ki chao ami ki ami nijeo jani nah</h1>


`;