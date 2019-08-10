
$(function(){

  
    var banner = {
        info:{
            zid:$("#zid").val(),
            color:$("#advertiser_text_color").val(),
            img_position:$("#img_position").val()
        },
        frame:{
            frame_border_bold_top:$("#frame_border_bold_top").val(),
            frame_border_bold_bottom:$("#frame_border_bold_bottom").val(),
            frame_border_bold_right:$("#frame_border_bold_right").val(),
            frame_border_bold_left:$("#frame_border_bold_left").val(),
            frame_border_color:$("#frame_border_color").val(),
            frame_background_color:$("#frame_background_color").val()
        },
        title:{
            title_color:$("#title_color").val(),
            title_paddintop:$("#title_paddintop").val(),
            title_font_size:$("#title_font_size").val(),
            title_font_weight:$("#title_font_weight").val(),
            title_font_family:$("#title_font_family").val()
        },
        img:{
            img_path:$("#img_path").val(),
            img_width:$("#img_width").val(),
            img_height:$("#img_height").val(),
            img_margin_top:$("#img_margin_top").val(),
            img_margin_left:$("#img_margin_left").val(),
            img_margin_right:$("#img_margin_right").val(),
            img_margin_bottom:$("#img_margin_top").val(),
            img_border_radius:$("#img_border_radius").val(),
            img_border_radius_unit:$("#img_border_radius_unit").val()
        },
        pr:{
            pr_text_color:$("#pr_text_color").val(),
            pr_font_size:$("#pr_font_size").val(),
            pr_position_bottom:$("#pr_position_bottom").val(),
            pr_position_right:$("#pr_position_right").val()
        }
    }
    
    console.log(banner.info.zid);

    function render(){

    var style = `
    .textcolor-flash{
        color:#FF6969 !important;
    }

    .bgcolor-flash{
        background:#FF6969 !important;
    }

    .top-flash{
      border-top:solid 10px #FF6969 !important;
    }
    .bottom-flash{
      border-top:solid 10px #FF6969 !important;
    }
    .left-flash{
      border-left:solid 10px #FF6969 !important;
    }
    .right-flash{
      border-right:solid 10px #FF6969 !important;
    }
    
    `

    html = `<style>
                  ${style}
  
                  li {
                    font: inherit;
                    vertical-align: baseline;
                    display: block;
                    word-break: break-all;
                    list-style: none;
                    width: 100%;
                    padding: 0;
                    margin: 0;
                  }
              
                  .gn-nad_frst_${banner.info.zid} {
                    overflow: hidden;
                    text-decoration: none;
                    display: block !important;
                    list-style: none;
                    position: relative !important;
                    border-top:solid ${banner.frame.frame_border_color} ${banner.frame.frame_border_bold_top}px;
                    border-bottom:solid ${banner.frame.frame_border_color} ${banner.frame.frame_border_bold_bottom}px;
                    border-right:solid ${banner.frame.frame_border_color} ${banner.frame.frame_border_bold_right}px;
                    border-left:solid ${banner.frame.frame_border_color} ${banner.frame.frame_border_bold_left}px;
                    background:${banner.frame.frame_background_color};
                  }
              
                  .gn-nad_frst_${banner.info.zid} a {
                    text-decoration: none;
                  }
              
                  .gn-nad_frst_img_${banner.info.zid} {
                    background-image: url(${banner.img.img_path});
                    background-size: cover;
                    float: ${banner.info.img_position};
                    width: ${banner.img.img_width}px;
                    height: ${banner.img.img_height}px;
                    margin: ${banner.img.img_margin_top}px ${banner.img.img_margin_right}px ${banner.img.img_margin_bottom}px ${banner.img.img_margin_left}px;
                    border-radius: ${banner.img.img_border_radius}${banner.img.img_border_radius_unit};
                  }
              
              
                  .gn-nad_frst_img-container_${banner.info.zid} {
                    text-decoration: none;
                    font-family: "HiraKakuProN-W3", "Helvetica";
                    margin: 0;
                    padding: 0;
                  }
              
                  .gn-nad_frst_text-container_${banner.info.zid} {
                    float: none;
                    padding: 0;
                    margin: 0;
                  }
              
                  .gn-nad_frst_bottom-title_${banner.info.zid} {
                    color: ${banner.title.title_color};
                    padding-right: 34px;
                    padding-top: ${banner.title.title_paddintop}px;
                    font-size: ${banner.title.title_font_size}px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 4;
                    overflow: hidden;
                    font-weight:${banner.title.title_font_weight};
                  }
  
                  .gn-nad_frst_bottom-description_${banner.info.zid} {
                    color: ${title_color};
                    padding-right: 34px;
                    padding-top: ${title_paddintop}px;
                    font-size: ${title_font_size}px;
                    display: none;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    font-weight:${title_font_weight};
                  }
            
                  .gn-nad_frst_bottom-title_${banner.info.zid} a {
                    text-decoration: none !important;
                  }
              
                  .gn-nad_frst_pr_${banner.info.zid} {
                    display: inline-block;
                    position: absolute;
                    font-family: "HiraKakuProN-W3", "Helvetica";
                    font-size: ${banner.pr.pr_font_size}px;
                    color: #bbbcc1;
                    bottom: ${banner.pr.pr_position_bottom};
                    right: ${banner.pr.pr_position_right};
                    font-weight: ${banner.pr.title_font_weight};
                    line-height: 1;
                  }
              
                  .gn-nad_frst_bottom-title_${banner.info.zid} a {
                    text-decoration: none !important;
                  }
                </style>
              
                <div class="gn-nad_frst_${banner.info.zid}">
                  <a href="{landing-url}">
                    <div class="gn-nad_frst_img-container_${banner.info.zid}">
                      <div class="gn-nad_frst_img_${banner.info.zid}">
                      </div>
                      <div class="gn-nad_frst_text-container_${banner.info.zid}">
                        <div class="gn-nad_frst_bottom-title_${banner.info.zid}">
                          {title}
                        </div>
                        <div class="gn-nad_frst_bottom-description_${banner.info.zid}">
                          ${`{description}`}
                        </div>
                        <div class="gn-nad_frst_pr_${banner.info.zid}">PR</div>
                      </div>
                    </div>
                  </a>
                </div>
                
                
                <p><input type="checkbox" name="" id="enlarge_text">テキスト部分を長くする</p>
                
                `
                $("#result_code").val(html);
  
                var iframe = document.getElementById("iframe-preview");
                iframe.contentWindow.document.body.innerHTML = html;        
  // });
  };
  render();
  
  
  $(`input:not([data-info='meta'])`).on('focus',function(){
      console.log($(this).data("classname"));
      var className = addZid($(this).data("classname"));
      console.log(className)
      // console.log($('iframe').contents().find(`.${className}`));
      $('iframe').contents().find(`.${className}`).addClass('bgcolor-flash').delay(100).queue(function(next){
        $('iframe').contents().find(`.${className}`).removeClass('bgcolor-flash');
        next();
      });
  });
  
  //枠のサイズを変えられる機能
  $(`#frame_border_bold_top`).on('keyup',function(){ 
      frameTopVal = $(`#frame_border_bold_top`).val();
      console.log(frameTopVal);
  
      $(`#frame_border_bold_bottom`).val(frameTopVal);
      $(`#frame_border_bold_right`).val(frameTopVal);
      $(`#frame_border_bold_left`).val(frameTopVal);
      banner.frame.frame_border_bold_top = frameTopVal + "px";
      banner.frame.frame_border_bold_bottom = frameTopVal + "px";
      banner.frame.frame_border_bold_right = frameTopVal + "px";
      banner.frame.frame_border_bold_left = frameTopVal + "px";
      
  });
  
  function addZid(classname){
    var classNameAndZid = classname + banner.info.zid;
    return classNameAndZid;
  }
  
  $("#reload").on('click', render);
  
  $("#btn").on('click',render);
  
  $("#btn2").on('click', function () {
      
      $("#result_code").css("display","block");
      $("#result_code").select();
      document.execCommand('copy');
  });
  
  $('textarea').focus(function () {
      $(this).select();
      document.execCommand('copy');
  });
  
  window.document.body.addEventListener('change', () => {
    render();
    render();
  });
  

  function enlarge_text(){
      $(document).on("","",function(){
        render();
      });
  }


  $("#description-exist").on('change',function(){
    var status = $(this).prop("checked");
    console.log(status)
    // if()
  
  });
  // $("h2").on('click', render);
  
  
  });
  