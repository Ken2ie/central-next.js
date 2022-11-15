import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='styles.home'>
    <Head>
      <title> Central University | Home Page</title>
      {/* BoxIcon */}
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
    </Head>
    
   <div className={styles.head}>
   <nav className = {styles.navbar}>
      <div className = {styles.logo}>
        <a>
           <Image src= '/Central-Uni-logo.png' width = {128} height= {77}/>
        </a>
      </div>
      <div className = {styles.search}>
        <div className = {styles.searchcontainer} >
          <input placeholder='Search'></input><i class='bx bx-search'></i>
        </div>
      </div>
      <div className = {styles.menu}>
        <div className = {styles.menucontainer}>
            <ul>
              <li><a href="" >Home</a></li>
              <li><a href="" >Gallery</a></li>
              <li><a href="" >Alumni</a><i class="bx bx-caret-down"></i></li>
              <li><a href="" >Corporate</a></li>
              <li><a href="" >CU Maps</a></li>
            </ul>
        </div>
      </div>
      <div className = {styles.btn}>
        <input type={'checkbox'}/>
      </div>
    </nav>

    <section className = {styles.Hero}>
        <div className = {styles.heroContainer}>
           <div className= {styles.slider}>
               <div className= {styles.pictures}>
                    <img src='https://img.freepik.com/free-photo/smiling-african-student-pointing-with-pencil-laptop-screen-concentrated-blonde-woman-glasses-propping-chin-with-hand-while-working-with-computer-office_197531-3714.jpg?w=1060&t=st=1668356810~exp=1668357410~hmac=c287b1ba65d07c19e6da4a502bd93109581c02d58979daeca26ed41b8705bfc9' />
               </div>
               <div className= {styles.pictures}>
                    <img src='https://img.freepik.com/free-photo/inspired-african-guy-pointing-finger-laughing-positive-black-man-smiling_197531-20236.jpg?w=1060&t=st=1668357748~exp=1668358348~hmac=f821e0f6eb922a9b7ce97ea0d61c0bd35a186acd174b240eb5f2bea18cbc9093' />
               </div>
               <div className= {styles.pictures}>
                    <img src='https://img.freepik.com/free-photo/smiling-african-student-pointing-with-pencil-laptop-screen-concentrated-blonde-woman-glasses-propping-chin-with-hand-while-working-with-computer-office_197531-3714.jpg?w=1060&t=st=1668356810~exp=1668357410~hmac=c287b1ba65d07c19e6da4a502bd93109581c02d58979daeca26ed41b8705bfc9' />
               </div>
               <div className= {styles.pictures}>
                    <img src='https://img.freepik.com/free-photo/smiling-african-student-pointing-with-pencil-laptop-screen-concentrated-blonde-woman-glasses-propping-chin-with-hand-while-working-with-computer-office_197531-3714.jpg?w=1060&t=st=1668356810~exp=1668357410~hmac=c287b1ba65d07c19e6da4a502bd93109581c02d58979daeca26ed41b8705bfc9' />
               </div>
               <div className= {styles.pictures}>
                    <img src='https://img.freepik.com/free-photo/smiling-african-student-pointing-with-pencil-laptop-screen-concentrated-blonde-woman-glasses-propping-chin-with-hand-while-working-with-computer-office_197531-3714.jpg?w=1060&t=st=1668356810~exp=1668357410~hmac=c287b1ba65d07c19e6da4a502bd93109581c02d58979daeca26ed41b8705bfc9' />
               </div>
           </div>
        </div>
    </section>
    <div className={styles.Menu} >
      <div className={styles.closeBtn}>
        <span><i class="bx bx-plus"></i></span>
      </div>
      <div className= {styles.MenuContainerr}>
          <div className={styles.menutitle}>
            <h1>Navigate CU</h1>
          </div>
          <div className={styles.menunavigations}>
            <div className={styles.ul}>
            <ul id={styles.above}>
              <ul>
                <li><a id= {styles.about}>About CU</a></li>
                <li><div id={styles.line}></div></li>
                <li><a>University Council</a></li>
                <li><a>Offices of the Authorities</a></li>
                <li><a>Job Vacancies</a></li>
                <li><a>Vision, Mission & Core Values</a></li>
                <li><a>Contact Us</a></li>
                <li><a>More <i class="bx bx-caret-right"></i></a></li>
              </ul>
              <ul>
                <li><a id= {styles.about}>Schools</a></li>
                <li><div id={styles.line}></div></li>
                <li><a>Undergraduate</a></li>
                <li><a>Graduate</a></li>
                <li><a>Student Support</a></li>
                <li><a>William O-A Institue of Integrity </a></li>
                <li><a>More <i class="bx bx-caret-right"></i></a></li>
              </ul>
              <ul>
                <li><a id= {styles.about}>International</a></li>
                <li><div id={styles.line}></div></li>
                <li><a>Fees</a></li>
                <li><a>Student Life</a></li>
                <li><a>Partnership</a></li>
                <li><a>Your Country</a></li>
                <li><a>More <i class="bx bx-caret-right"></i></a></li>
              </ul>
              <ul>
                <li><a id= {styles.about}>Admissions</a></li>
                <li><div id={styles.line}></div></li>
                <li><a>How to Apply</a></li>
                <li><a>International info and Scholarship</a></li>
                <li><a>Admission Forms 2022/2023</a></li>
                <li><a>Campus Life</a></li>
                <li><a>More <i class="bx bx-caret-right"></i></a></li>
              </ul>
            </ul>
            <ul id={styles.bottom}>
              <ul>
                <li><a id= {styles.about}>Chaplaincy</a></li>
                <li><div id={styles.line}></div></li>
                <li><a>Navigations</a></li>
                <li><a>Navigations</a></li>
                <li><a>Navigations</a></li>
                <li><a>Navigations</a></li>
                <li><a>Navigations</a></li>
                <li><a>More <i class="bx bx-caret-right"></i></a></li>
              </ul>
              <ul>
                <li><a id= {styles.about}>Research</a></li>
                <li><div id={styles.line}></div></li>
                <li><a>Navigations</a></li>
                <li><a>Navigations</a></li>
                <li><a>Navigations</a></li>
                <li><a>Navigations</a></li>
                <li><a>Navigations</a></li>
                <li><a>More <i class="bx bx-caret-right"></i></a></li>
              </ul>
              <ul>
                <li><a id= {styles.about}>Publications</a></li>
                <li><div id={styles.line}></div></li>
                <li><a>Navigations</a></li>
                <li><a>Navigations</a></li>
                <li><a>Navigations</a></li>
                <li><a>Navigations</a></li>
                <li><a>Navigations</a></li>
                <li><a>More <i class="bx bx-caret-right"></i></a></li>
              </ul>
              <ul>
                <li><a id= {styles.about}>Library</a></li>
                <li><div id={styles.line}></div></li>
                <li><a>Navigations</a></li>
                <li><a>Navigations</a></li>
                <li><a>Navigations</a></li>
                <li><a>Navigations</a></li>
                <li><a>Navigations</a></li>
                <li><a>More <i class="bx bx-caret-right"></i></a></li>
              </ul>
            </ul>
            </div>
          </div>
          <div className={styles.underbar}>
             <div className={styles.underbarContainer}>
                <div className={styles.pic}>
                  <Image src='/logo.png' width={100} height={120}/>
                  <p>Central Univeristy Student and Visitors Information Panel.</p>
                </div>
                <div className={styles.link}>
                  <a href="">Explore More</a>
                </div>
             </div>
          </div>
      </div>
      <div className={styles.liness}></div>
            <div className={styles.event}>
              <div className={styles.eventContainer}>
                <div className={styles.card}>
                <span>A Very Important Information or Event</span>
                </div>
                <div className={styles.sub}>
                  <div className={styles.lines}></div>
                  <span>Central University College</span>
                </div>
              </div>
            </div>
    </div>
   </div>

    <section className= {styles.dreams}>
        <div className={styles.section}>
          <div className={styles.sectionContainer}>
          <h1>Academic</h1>
          <ul>
          <span>Arts</span>
          <span>Science</span>
          <span>Business</span>
          <span>Engineering</span>
          <span>Law</span>
          <span>Health</span>
          </ul>
          </div>
        </div>
    </section>
    <section className={styles.newsLetter}>
    <div className={styles.body}>
        <div className={styles.containerrr}>
            <div className={styles.headd}>
                <h1>CU NewsRoom</h1>
            </div>
            <div className={styles.newsletter}>
               
                <div class={styles.news} id={styles.two}>
                    <div class={styles.pic}><img src="images/CU Prospectus.jpg" alt=""/></div>
                    <div class={styles.words}>
                        <h4>News Title</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ullam neque incidunt saepe culpa eveniet iste nemo vel null aperiam expedita impedi...
                        </p>
                        <a href="#">Read More</a>
                        <div class={styles.carousel}>
                            <div class={styles.page}>
                            </div>
                            <span id={styles.date}>10.Nov.2022</span>
                        </div>
                    </div>
                </div>
                <div class={styles.news} id={styles.two}>
                    <div class={styles.pic}><img src="images/CU Prospectus.jpg" alt=""/></div>
                    <div class={styles.words}>
                        <h4>News Title</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ullam neque incidunt saepe culpa eveniet iste nemo vel null aperiam expedita impedi...
                        </p>
                        <a href="#">Read More</a>
                        <div class={styles.carousel}>
                            <div class={styles.page}>
                            </div>
                            <span id={styles.date}>10.Nov.2022</span>
                        </div>
                    </div>
                </div>
                
                <div class={styles.news} id={styles.two}>
                    <div class={styles.pic}><img src="images/CU Prospectus.jpg" alt=""/></div>
                    <div class={styles.words}>
                        <h4>News Title</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ullam neque incidunt saepe culpa eveniet iste nemo vel null aperiam expedita impedi...
                        </p>
                        <a href="#">Read More</a>
                        <div class={styles.carousel}>
                            <div class={styles.page}>
                            </div>
                            <span id={styles.date}>10.Nov.2022</span>
                        </div>
                    </div>
                </div>
                <div class={styles.news} id={styles.two}>
                    <div class={styles.pic}><img src="images/CU Prospectus.jpg" alt=""/></div>
                    <div class={styles.words}>
                        <h4>News Title</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ullam neque incidunt saepe culpa eveniet iste nemo vel null aperiam expedita impedi...
                        </p>
                        <a href="#">Read More</a>
                        <div class={styles.carousel}>
                            <div class={styles.page}>
                            </div>
                            <span id={styles.date}>10.Nov.2022</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class={styles.subscribe}>
                <div class={styles.contain}>
                    <input type="email" placeholder="Join our Newsletter"/>
                    <button><i class='bx bxs-send'></i></button>
                </div>
            </div>
        </div>
    </div>
    </section>
    <footer className={styles.footer}>
        <div className={styles.school}>
             <div className={styles.p}>
              <div className={styles.pContainer}>
              <Image src={"/logo.png"} width={100} height={120}/>
              </div>
             </div>
        </div>
    </footer>
   </div>
  )
}
