# Mio

<p style="text-align: center;"><img src="https://dev-shop.itaphoa.com/assets/logo.png" width="450"></p>

<p style='font-size:20px;'>
 <span>&#9749; </span>
 <strong >Thiết lập project Nx</strong>
 <span> &#9749;</span>
</p>

<div>
Link tham khảo: 
<span style="text-decoration: underline;color:blue">https://nx.dev/</span>
</div>

<!-- <div>
<span style='font-size:10px;'>&#9999; </span> Cài đặt workspace bằng lệnh  <span style="color:#ec4261"> npx create-nx-workspace@latest</span>
</div> -->

<div>
<span style='font-size:20px;'>&#10024; </span>
<strong>Clone và run project</strong>
<p><span style='font-size:10px;'>&#9999; </span>Cài đặt Nx CLI: npm install -g nx</p>
<p><span style='font-size:10px;'>&#9999; </span>Cài đặt các thư viện: yarn install</p>
<div><span style='font-size:10px;'>&#11088;</span> Công cụ hỗ trợ</div>
<p><span style='font-size:10px;'>&#9999; </span> Cài đặt Nx console bằng extension của vscode (sau khi cài die vscode khởi động lại để apply hoàn toàn extension)</p>
</div>

<p style='font-size:20px;margin-top:50px'>
 <span>&#9749; </span>
 <strong>Thiết lập Capacitor cho Project</strong>
 <span> &#9749;</span>
</p>

<div>
<p>
<div>
<span style='font-size:10px;'>&#9999; </span> Add librarry capacitor: 
</div>
<div style="color:#ec4261">yarn add --save-dev --exact @nxtend/capacitor</div>
</p>

<p>
<div>
<span style='font-size:10px;'>&#9999; </span> Add capacitor in exist project: 
</div>
<div style="color:#ec4261">nx generate @nxtend/capacitor:capacitor-project {Capacitor project name} --project {frontend project name}
</div>
<div>
<span style="text-decoration: underline;">example: </span>  nx generate @nxtend/capacitor:capacitor-project mobile-ap --project mobile-app
</div>
</p>

<p>
<div>
<span style='font-size:10px;'>&#9999; </span> Add platform: 
</div>
<div style="color:#ec4261">nx run {Capacitor project name}:add --platform {native platform}
</div>
<div>
<span style="text-decoration: underline;">example: </span>  nx run mobile-app-cap:add --platform android/ ios
</div>
</p>
</div>

<p>
<div>
<span style='font-size:10px;'>&#9999; </span> Sync project to web from app: ( web phải được export trước khi sync)
</div>
<div style="color:#ec4261">nx run {Capacitor project name}:sync --platform {native platform}
</div>
<div>
<span style="text-decoration: underline;">example: </span>  nx run mobile-app-cap:sync --platform android/ ios
</div>
</p>
</div>

<p>
<div>
<span style='font-size:10px;'>&#9999; </span> Open platform
</div>
<div style="color:#ec4261">nx run {Capacitor project name}:open --platform {native platform}
</div>
<div>
<span style="text-decoration: underline;">example: </span>  nx run mobile-app-cap:open --platform android/ ios
</div>
</p>
</div>

// @ts-ignore : bỏ qua các lỗi liên quan tới cấu trúc bị vi phạm khi dùng typescript
