
$(function(){

  var html;
  var img_position;
  var zid;
  var color; 


  //frame
  var frame_border_bold;
  var frame_border_color;
  var frame_background_color;
  //title
  var title_color;
  var title_paddintop;

  //img
  var img_path;
  var img_width;
  var img_height;
  var img_margin_top;
  var img_margin_left;
  var img_margin_right;
  var img_margin_bottom;
  var img_border_radius;
  var img_border_radius_unit;
  
  
  var pr_text_color;
  var pr_font_size;
  var pr_position_bottom;
  var pr_position_right;
  
  function render(){
    zid = $("#zid").val();
    color = $("#advertiser_text_color").val();
    img_position = $("#img_position").val();
  
  
  //frame
  frame_border_bold = $("#frame_border_bold").val();
  frame_border_color = $("#frame_border_color").val();
  frame_background_color = $("#frame_background_color").val();
  //title
  title_color = $("#title_color").val();
  title_paddintop = $("#title_paddintop").val();

  //img
  img_path = $("#img_path").val();
  img_width = $("#img_width").val();
  img_height = $("#img_height").val();
  img_margin_top = $("#img_margin_top").val();
  img_margin_left = $("#img_margin_left").val();
  img_margin_right = $("#img_margin_right").val();
  img_margin_bottom = $("#img_margin_top").val();
  img_border_radius = $("#img_border_radius").val();
  img_border_radius_unit = $("#img_border_radius_unit").val();
  
  
  pr_text_color = $("#pr_text_color").val();
  pr_font_size = $("#pr_font_size").val();
  pr_position_bottom = $("#pr_position_bottom").val();
  pr_position_right = $("#pr_position_right").val();


  html = `<style>
                  .textcolor-flash{
                      color:#FF6969 !important;
                  }

                  .bgcolor-flash{
                      background:#FF6969 !important;
                  }

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
            
                .gn-nad_frst_${zid} {
                  overflow: hidden;
                  text-decoration: none;
                  display: block !important;
                  list-style: none;
                  position: relative !important;
                  margin-bottom: 23px;
                  border:solid ${frame_border_color} ${frame_border_bold}px;
                  background:${frame_background_color};
                }
            
                .gn-nad_frst_${zid} a {
                  text-decoration: none;
                }
            
                .gn-nad_frst_img_${zid} {
                  background-image: url(${img_path});
                  background-size: cover;
                  float: ${img_position};
                  width: ${img_width}px;
                  height: ${img_height}px;
                  margin: ${img_margin_top}px ${img_margin_right}px ${img_margin_bottom}px ${img_margin_left}px;
                  border-radius: ${img_border_radius}${img_border_radius_unit};
                }
            
            
                .gn-nad_frst_img-container_${zid} {
                  text-decoration: none;
                  font-family: "HiraKakuProN-W3", "Helvetica";
                  margin: 0;
                  padding: 0;
                }
            
                .gn-nad_frst_text-container_${zid} {
                  float: none;
                  padding: 0;
                  margin: 0;
                }
            
                .gn-nad_frst_bottom-title_${zid} {
                  color: ${title_color};
                  padding-right: 34px;
                  padding-top: ${title_paddintop};
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 4;
                  overflow: hidden;
                }
            
                .gn-nad_frst_bottom-title_${zid} a {
                  text-decoration: none !important;
                }
            
                .gn-nad_frst_pr {
                  display: inline-block;
                  position: absolute;
                  font-family: "HiraKakuProN-W3", "Helvetica";
                  font-size: ${pr_font_size};
                  color: #bbbcc1;
                  bottom: ${pr_position_bottom};
                  right: ${pr_position_right};
                  font-weight: normal;
                  line-height: 1;
                }
            
                .gn-nad_frst_bottom-title_${zid} a {
                  text-decoration: none !important;
                  color: ${pr_text_color};
                }
              </style>
            
              <div class="gn-nad_frst_${zid}">
                <a href="{landing-url}">
                  <div class="gn-nad_frst_img-container_${zid}">
                    <div class="gn-nad_frst_img_${zid}">
                    </div>
                    <div class="gn-nad_frst_text-container_${zid}">
                      <div class="gn-nad_frst_bottom-title_${zid}">
                        {title}
                      </div>
                      <div class="gn-nad_frst_pr">PR</div>
                    </div>
                  </div>
                </a>
              </div>`
              $("#result_code").val(html);

              var iframe = document.getElementById("iframe-preview");
              iframe.contentWindow.document.body.innerHTML = html;        
// });
};
render();


$("input").on('focus',function(){
    // console.log($(this).attr(data));
    console.log($('iframe').contents().find(`[class=gn-nad_frst_${zid}]`));
    $('iframe').contents().find(`[class=gn-nad_frst_${zid}]`).addClass('bgcolor-flash').delay(500).queue(function(next){
      $('iframe').contents().find(`.gn-nad_frst_${zid}`).removeClass('bgcolor-flash');
      next();  
    });
});

$("#reload").on('click', render);


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
  console.log(123);
  render();
});

// $("h2").on('click', render);


});
