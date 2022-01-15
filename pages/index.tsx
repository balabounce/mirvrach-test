import React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import adultPNG from '../public/images/adult.png'
import childPNG from '../public/images/child.png'
import respfailPNG from '../public/images/icons/respfail.png'
import runinabPNG from '../public/images/icons/runinab.png'
import joincontrPNG from '../public/images/icons/joincontr.png'
import hipdisPNG from '../public/images/icons/hipdis.png'
import fatiguePNG from '../public/images/icons/fatigue.png'
import scoliosisPNG from '../public/images/icons/scoliosis.png'
import limmobPNG from '../public/images/icons/limmob.png'
import adultPNG2 from '../public/images/adult2.png'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    const [active, setActive] = React.useState(0);  

  return (
    <div className={styles.container}>
      <Head>
        <title>Мир врача</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
            <header className={styles.header}>
                <h1>А вдруг СМА?</h1>
                <h2>Выберите, кто Ваш пациент</h2>
            </header>
            <div className={styles.pacients_block}>
                <div className={styles.pacient}>
                    <h3>Взрослый</h3>
                    <div className={styles.pacient_image}>
                        <Image src={adultPNG} alt='adult' layout='fill'/>
                    </div>
                    <div className={styles.symptoms}>
                        <p>Менее тяжелые формы СМА могут возникать и<br/> диагностироваться в зрелом возрасте.</p>
                        <p>По сравнению с СМА у детей, СМА у взрослых<br/> может иметь более легкие симптомы, но без<br/> патогенетической терапии пациенты со СМА 2-3<br/> типа неуклонно теряют двигательные навыки.</p>
                        <p>По сравнению с СМА в детстве, течение СМА у<br/> взрослых может быть более коварным и трудным<br/> для распознавания.</p>
                    </div>
                </div>
                 <div className={styles.pacient}>
                    <h3>Ребенок</h3>
                    <div className={styles.pacient_image}>
                        <Image src={childPNG} alt='child' layout='fill'/>
                    </div>
                    <div className={styles.symptoms_child}>
                        <p>Ребенок, плохо удерживающий голову, когда ему<br/> придают сидячее положение, с вялыми движениями<br/> нижних конечностей или с трудом тянущийся к<br/> предметам, но при этом с осмысленным и ярким<br/> взглядом, улыбающийся и социально активный,<br/> вызывает настороженность в отношении наличия<br/> СМА.</p>
                        <p>Младенцам со СМА необходимо экстренное<br/> направление к специалисту, ранняя диагностика и<br/> обеспечение терапией, спасающей жизнь, поскольку<br/> эти мотонейроны очень быстро подвергаются<br/> дегенерации при прогрессировании заболевания</p>
                    </div>
                </div>
            </div>
            <div className={styles.typo_container}>
               <p className={styles.typo}>Сообщает ли один из ваших пациентов о следующих симптомах? <span>(нажмите на любую иконку и узнайте больше)</span></p> 
            </div>
        <div className={styles.carousel}>
            <div className={styles.carousel_image} >
                <Image src={adultPNG2} alt='adult' layout='fill' objectFit='cover'/>
                <div id={styles.signature}>
                    <p>Взрослый</p>
                </div>
            </div>
            <div className={styles.carousel_icons}>
                <div className={styles.carousel_icons_container_two}>
                    <div id={styles.scoliosis} > 
                    <div className={styles.circle} ></div>
                        <div>
                            <p>Cколиоз</p>
                        </div>
                        <Image src={scoliosisPNG} alt='scoliosis' layout='fill'/>  
                    </div>
                    <div id={styles.pseudo} onMouseOver={() => setActive(2)} onMouseOut={() => setActive(0)}>
                    </div>
                    <div id={styles.swalldis}>
                        <div className={styles.circle} ></div>
                        <div className={active === 2 ? styles.active : ''}>
                            <p>Нарушения жевания<br/> и глотания</p>
                        </div>
                        <img src='/images/icons/swalldis.png' alt='swalldis' />  
                    </div>
                    <div id={styles.runinab}>
                        <div className={styles.circle} ></div>
                         <div>
                            <p>Неспособность бегать,</p>
                            <p>изменение походки</p>
                        </div>   
                        <Image src={runinabPNG} alt='runinab' layout='fill'/>  
                    </div>
                    <div id={styles.hipdis}>
                        <div className={styles.circle} ></div>
                        <div>
                            <p>Вывих бедра</p>
                        </div>
                        <Image src={hipdisPNG} alt='hipdis' layout='fill'/>  
                    </div>
                </div>
                <div className={styles.carousel_icons_container_one}>
                    <div id={styles.fatigue}>
                    <div className={styles.circle} ></div>
                        <div>
                            <p>Утомляемость</p>
                        </div>
                        <Image src={fatiguePNG} alt='fatigue' layout='fill'/>  
                    </div>
                    <div id={styles.limmod}>
                        <div className={styles.circle} ></div>
                        <div>
                            <p>Ограниченная способность<br/> поднимать руки<br/> и переносить предметы</p>
                        </div>
                        <Image src={limmobPNG} alt='limmod' layout='fill'/>  
                    </div>
                    <div id={styles.joincontr}>
                        <div className={styles.circle} ></div>
                        <div>
                            <p>Контрактура<br/> суставов</p>
                        </div>
                        <Image src={joincontrPNG} alt='joincontr' layout='fill'/>  
                    </div>
                    <div id={styles.respfail}>
                        <div className={styles.circle} ></div>
                        <div>
                            <p>Дыхательная<br/> недостаточность/<br/> респираторная<br/> дисфункция</p>
                        </div>
                        <Image src={respfailPNG} alt='respfail' layout='fill'/>  
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}
