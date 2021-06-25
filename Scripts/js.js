const obj_sel_rs = document.querySelector('#sel_rede_social')
const obj_img_rs = document.querySelector('#img_rede_social')
const obj_p_rs = document.querySelector('#p_rede_social')
const array_fig = document.querySelectorAll('.figuras')
const obj_add_fig = document.querySelector('#div_adiciona_figura')
const array_td = document.querySelectorAll('#tab_principal td')
const obj_tab_vz = document.querySelector('#tab_vazia')
const obj_cap_vz = document.querySelector('#tab_vazia caption')
const obj_prog_tab = document.querySelector('#prog_tab_vazia')

const obj_img_new = document.createElement('img')
const obj_input_new = document.createElement('input')

let cont_linhas = 0


const array_fig_lang = document.querySelectorAll('[name="rb_lang"]')
const obj_img_lang = document.querySelector('#imagem_lang')
const obj_p_lang = document.querySelector('#p_lang')
const array_li_pr = document.querySelectorAll('.lista_principal li')
const obj_lis_vz = document.querySelector('.lista_vazia')
const obj_p_lis_vz = document.querySelector('.p_lis_vz')
const obj_lis_prog = document.querySelector('.prog_li')
let cont_li = 0


obj_sel_rs.addEventListener('change', FunMudaFig)
for(obj_img of array_fig){
    obj_img.addEventListener('click', function(){FunAddFig(this.src, this.alt)})
}
for(obj_td of array_td){
    obj_td.addEventListener('click', function(){FunTd(this.innerText)})
}
for(obj_fig of array_fig_lang){
    obj_fig.addEventListener('click', FunFig)
}
for(obj_li of array_li_pr){
    obj_li.addEventListener('click', function(){FunLi(this.innerText)})
}


function FunMudaFig(){
    obj_img_rs.setAttribute('src', 'Imagens/'+obj_sel_rs.value+'.png')
    obj_img_rs.setAttribute('alt','Logo '+obj_sel_rs.value)
    obj_img_rs.setAttribute('title','Logo '+obj_sel_rs.value)
    obj_p_rs.innerText = 'Logo ' + obj_sel_rs.value
}
function FunAddFig(par_src, par_alt){
    obj_img_new.setAttribute('src',par_src)
    obj_img_new.setAttribute('alt',par_alt)
    obj_img_new.setAttribute('title',par_alt)
    obj_add_fig.appendChild(obj_img_new)

    obj_input_new.setAttribute('type','text')
    obj_input_new.setAttribute('disabled',true)
    obj_input_new.setAttribute('value',par_alt)
    obj_input_new.setAttribute('class','input_novo')
    obj_add_fig.appendChild(obj_input_new)
}
function FunTd(par_text){
    if(cont_linhas < 5){
        const obj_tr_new = document.createElement('tr')
        const obj_td_new = document.createElement('td')
        obj_td_new.innerText = par_text
        obj_tr_new.appendChild(obj_td_new)
        obj_tab_vz.appendChild(obj_tr_new)
        cont_linhas++
        obj_cap_vz.innerText = 'Tabela com '+cont_linhas+' linha(s)'
        obj_prog_tab.value = cont_linhas
    }
    else{
        alert('Tabela cheia!')
    }
}
function FunFig(){
    for(obj_fig of array_fig_lang){
        if(obj_fig.checked){
            obj_img_lang.setAttribute('src', 'Imagens/'+obj_fig.value+'.png')
            obj_img_lang.setAttribute('alt', obj_fig.value)
            obj_img_lang.setAttribute('title', obj_fig.value)
            obj_p_lang.innerText = 'Linguagem '+obj_fig.value
        }
    }
}
function FunLi(par_txt){
    if(cont_li < 6){
        const obj_li_new = document.createElement('li')
        obj_li_new.innerText = par_txt
        obj_lis_vz.appendChild(obj_li_new)
        cont_li++
        obj_p_lis_vz.innerText = 'Lista com '+cont_li+' elementos'
        obj_lis_prog.value = cont_li
    }
    else{
        alert('Lista cheia!')
    }
}