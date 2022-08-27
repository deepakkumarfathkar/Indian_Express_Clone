function nav(){
    return `<div class="navbar">
    <img src="assets/hamburger.png" class="hamburger">
    <div class="nav_left">
        <p onclick="location.href='index.html'">Home</p>
        <p onclick="location.href='political.html'">Political Plus</p>
        <p onclick="location.href='int_news.html.html'">International News</p>
        <p onclick="location.href='login.html'">Sign in</p>
        <button id="subscribe">SUBSCRIBE</button>
    </div>
    <div class="nav_right">
        <div id="input-all">
                <div id="inputContainer">
                    <div class="inputDiv">
                        <input type="text" id="search" class="search" placeholder="Search" oninput="debounce(main, 1000)">
                    </div>
                <img src="assets/search.png"  onclick="serchfunction()" class="search-icon">
                </div>
            <hr>
        </div>
        <img src="https://www.hotstar.com/assets/c724e71754181298e3f835e46ade0517.svg" alt="" id="profile">
    </div>
</div>
<section class="popup popup_hide">
    <section class="popup_container">
      <div class="popup_header"></div>
      <div class="popup_content"></div>
      <div class="popup_footer"></div>
    </section>
    <div class="popup_close"></div>
  </section>
  <section class="popup_full popup_hide">
    <section class="popup_container">
      <div class="popup_header">
        <div class="popup_close"></div>
      </div>
      <div class="popup_content">
        <!-- <img src="" alt=""> -->
        <ul class="topicsbox_d">
          <li><a href="/" >Home</a>
            <ul>
              <li class="alone"><a href="#" ><strong>World</strong></a></li>
              <li class="alone"><a href="#" ><strong>India</strong></a></li>
              <li class="alone"><a href="#" ><strong>North East India</strong></a></li>
              <li><a href="#" >Arunachal Pradesh</a></li>
              <li><a href="#" >Assam</a></li>
              <li><a href="#" >Manipur</a></li>
              <li><a href="#" >Meghalaya</a></li>
              <li><a href="#" >Mizoram</a></li>
              <li><a href="#" >Nagaland</a></li>
              <li><a href="#" >Tripura</a></li>
            </ul>
          </li>
          <li><a href="#" >Photos</a>
            <ul>
              <li><a href="#" >Entertainment</a></li>
              <li><a href="#" >Sports</a></li>
              <li><a href="#" >News</a></li>
              <li><a href="#" >Lifestyle</a></li>
              <li><a href="#" >Viral</a></li>
              <li><a href="#" >Technology</a></li>
              <li><a href="#" >Archives</a></li>
            </ul>
          </li>
          <li><a href="#" >Videos</a>
            <ul>
              <li><a href="#" >Explained</a></li>
              <li><a href="#" >Technology</a></li>
              <li><a href="#" >Entertainment</a></li>
              <li><a href="#" >Lifestyle</a></li>
              <li><a href="#" >Food</a></li>
              <li><a href="#" >Sports</a></li>
              <li><a href="#" >Idea Exchange</a></li>
              <li><a href="#" >News</a></li>
            </ul>
          </li>
          <li><a href="#" >Audio</a>
            <ul>
              <li><a href="#" >3 Things</a></li>
              <li><a href="#" >Express Sports</a></li>
              <li><a href="#" >Water</a></li>
              <li><a href="#" >Likh: The Process</a></li>
              <li><a href="#" >Metro Food Hoppers</a></li>
              <li><a href="#" >The Sandip Roy Show</a></li>
              <li><a href="#" >Talking Books</a></li>
              <li><a href="#" >What to Watch this Weekend</a></li>
            </ul>
          </li>
          <li><span class="no_link_d">From the Print</span>
            <ul>
              <li><a href="#" >Opinion</a></li>
              <li><a href="#" >Explained</a></li>
              <li><a href="#" >Today's Paper</a></li>
              <li><a href="#" >Delhi Confidential</a></li>
              <li><a href="#" >Astrology</a></li>
              <li><a href="#" >Epaper</a></li>
              <li><a href="#" >Sunday Eye</a></li>
            </ul>
          </li>
          <div class="clear_d"></div>
          <div class="navborder_d"></div>
          <li><a href="#">Entertainment</a>
            <ul>
              <li><a href="#" >Bollywood</a></li>
              <li><a href="#" >Hollywood</a></li>
              <li><a href="#">Television</a></li>
              <li><a href="#">Music</a></li>
              <li><a href="#" >Reviews</a></li>
              <li><a href="#" >Regional</a></li>
              <li><a href="#">Tamil</a></li>
              <li><a href="#">Telugu</a></li>
              <li><a href="#" >Malayalam</a></li>
              <li><a href="#" >Box Office</a></li>
              <li><a href="#">Web Series</a></li>
            </ul>
          </li>
          <li><span class="no_link_d">Featured</span>
            <ul>
              <li><a href="#" >What Is</a></li>
              <li><a href="#" >Who Is</a></li>
              <li><a href="#" >When Is</a></li>
              <li><a href="#" >How to</a></li>
              <li><a href="#" >Research</a></li>
              <li><a href="#" >GenderAnd</a></li>
            </ul>
          </li>
          <li><a href="#" >Sports</a>
            <ul>
              <li><a href="#" >Olympics</a></li>
              <li><a href="#" >T20 WC</a></li>
              <li><a href="#" >Badminton</a></li>
              <li><a href="#" >Cricket</a></li>
              <li><a href="#" >Football</a></li>
              <li><a href="#" >FIFA 2018</a></li>
              <li><a href="#" >Hockey</a></li>
              <li><a href="#" >Motor Sport</a></li>
              <li><a href="#" >Tennis</a></li>
              <li><a href="#" >WWE Wrestling</a></li>
            </ul>
          </li>
          <li><a href="#" >Tech</a>
            <ul>
              <li><a href="#">Technology</a></li>
              <li><a href="#">Mobile &amp; Tabs</a></li>
              <li><a href="#">Gadgets</a></li>
              <li><a href="#" >Science</a></li>
              <li><a href="#" >Tech Reviews</a></li>
              <li><a href="#" >Social</a></li>
              <li><a href="#" >Tech News</a></li>
            </ul>
          </li>
          <li><a href="#" >Lifestyle</a>
            <ul>
              <li><a href="#" >Books</a></li>
              <li><a href="#" >Fashion</a></li>
              <li><a href="#" >Food Wine</a></li>
              <li><a href="#" >Health</a></li>
              <li><a href="#" >Fitness</a></li>
              <li><a href="#" >Art &amp; Culture</a></li>
              <li><a href="#">Workplace</a></li>
              <li><a href="#" >Auto &amp; Travel</a></li>
            </ul>
          </li>
          <div class="clear_d"></div>
          <div class="navborder_d"></div>
          <li><a href="#" >Trending</a>
            <ul>
              <li><a href="#" >Trending In India</a></li>
              <li><a href="#" >Trending Globally</a></li>
              <li><a href="#" >Viral Videos</a></li>
              <li><a href="#" >Bizarre</a></li>
              <li><a href="#">Voice</a></li>
                        <li class="alone"><a href="#" ><strong>Parenting</strong></a></li>
                <li><a href="#" >Food</a></li>
                <li><a href="#" >Health &amp; Fitness</a></li>
                <li><a href="#" >Learning</a></li>
                <li><a href="#" >Family</a></li>
                <li><a href="#" >Blogs</a></li>
                <li><a href="#" >Things To Do</a></li>
                    </ul>
          </li>
          <li><a href="#" >Cities News</a>
            <ul>
              <li><a href="#" >Ahmedabad</a></li>
              <li><a href="#" >Bangalore</a></li>
              <li><a href="#" >Chandigarh</a></li>
              <li><a href="#" >Chennai</a></li>
              <li><a href="#" >Delhi</a></li>
              <li><a href="#" >Jaipur</a></li>
              <li><a href="#" >Kolkata</a></li>
              <li><a href="#" >Lucknow</a></li>
              <li><a href="#" >Ludhiana</a></li>
              <li><a href="#" >Mumbai</a></li>
              <li><a href="#" >Pune</a></li>
            </ul>
          </li>
          <li><a href="#" >Jobs</a>
            <ul>
              <li><a href="#" >Bank Jobs</a></li>
              <li><a href="#" >Defence Jobs</a></li>
              <li><a href="#" >PSU</a></li>
              <li><a href="#" >Railway</a></li>
              <li><a href="#" >UPSC</a></li>
              <li><a href="#" >Teachers Job</a></li>
              <li><a href="#" >SSC</a></li>
            </ul>
          </li>
          <li><a href="#" >Business</a>
            <ul>
              <li><a href="#" >Aviation</a></li>
              <li><a href="#" >Banking &amp; finance</a></li>
              <li><a href="#" >Budget</a></li>
              <li><a href="#" >Business Other</a></li>
              <li><a href="#" >Companies</a></li>
              <li><a href="#" >Economy</a></li>
              <li><a href="#" >Market</a></li>
            </ul>
          </li>
          <li><a href="#" >Education</a>
            <ul>
              <li><a href="#" >Students Voice</a></li>
              <li><a href="#" >Study Abroad</a></li>
              <li class="alone"><span class="no_link_d"><strong>More</strong></span></li>
              <li><a href="#" >Elections</a></li>
              <li><a href="#" >Brand Solutions</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="popup_footer"></div>
    </section>
  </section>`
}
export default nav