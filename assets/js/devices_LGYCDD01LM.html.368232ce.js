"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[16769],{7325:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>i,data:()=>n});var a=t(1768);const s={},i=(0,t(69420).A)(s,[["render",function(e,o){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[o[12]||(o[12]=(0,a.Lk)("h1",{id:"aqara-lgycdd01lm",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#aqara-lgycdd01lm"},[(0,a.Lk)("span",null,"Aqara LGYCDD01LM")])],-1)),(0,a.Lk)("table",null,[o[7]||(o[7]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[o[2]||(o[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"LGYCDD01LM")],-1)),(0,a.Lk)("tr",null,[o[1]||(o[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=Aqara"},{default:(0,a.k6)((()=>o[0]||(o[0]=[(0,a.eW)("Aqara")]))),_:1})])]),o[3]||(o[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Light strip T1")],-1)),o[4]||(o[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"light (state, brightness, color_temp, color_xy), power_on_behavior, length, min_brightness, max_brightness, audio, audio_sensitivity, audio_effect, preset, speed, linkquality")],-1)),o[5]||(o[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/LGYCDD01LM.png",alt:"Aqara LGYCDD01LM"})])],-1)),o[6]||(o[6]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"White-label"),(0,a.Lk)("td",null,"Aqara RLS-K01D")],-1))])]),o[13]||(o[13]=(0,a.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,a.Lk)("span",null,"OTA updates")])],-1)),(0,a.Lk)("p",null,[o[9]||(o[9]=(0,a.eW)("This device supports OTA updates, for more information see ")),(0,a.bF)(t,{to:"/guide/usage/ota_updates.html"},{default:(0,a.k6)((()=>o[8]||(o[8]=[(0,a.eW)("OTA updates")]))),_:1}),o[10]||(o[10]=(0,a.eW)("."))]),o[14]||(o[14]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>o[11]||(o[11]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),o[15]||(o[15]=(0,a.Fv)('<ul><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>color_sync</code>: When enabled colors will be synced, e.g. if the light supports both color x/y and color temperature a conversion from color x/y to color temperature will be done when setting the x/y color (default true). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light"><span>Light</span></a></h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>color_temp</code>, <code>color_xy</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li><li><code>color_temp</code>: To control the color temperature (in reciprocal megakelvin a.k.a. mired scale) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color_temp&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>153</code> and <code>370</code>, the higher the warmer the color. To read the color temperature send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color_temp&quot;: &quot;&quot;}</code>. Besides the numeric values the following values are accepted: <code>coolest</code>, <code>cool</code>, <code>neutral</code>, <code>warmest</code>.</li><li><code>color_xy</code>: To control the XY color (CIE 1931 color space) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color&quot;: {&quot;x&quot;: X_VALUE, &quot;y&quot;: Y_VALUE}}</code> (e.g. <code>{&quot;color&quot;:{&quot;x&quot;:0.123,&quot;y&quot;:0.123}}</code>). To read the XY color send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color&quot;:{&quot;x&quot;:&quot;&quot;,&quot;y&quot;:&quot;&quot;}}</code>. Alternatively it is possible to set the XY color via RGB: <ul><li><code>{&quot;color&quot;: {&quot;r&quot;: R, &quot;g&quot;: G, &quot;b&quot;: B}}</code> e.g. <code>{&quot;color&quot;:{&quot;r&quot;:46,&quot;g&quot;:102,&quot;b&quot;:150}}</code></li><li><code>{&quot;color&quot;: {&quot;rgb&quot;: &quot;R,G,B&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;rgb&quot;:&quot;46,102,150&quot;}}</code></li><li><code>{&quot;color&quot;: {&quot;hex&quot;: HEX}}</code> e.g. <code>{&quot;color&quot;:{&quot;hex&quot;:&quot;#547CFF&quot;}}</code></li></ul></li></ul><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the light will not answer to other on with timed off commands. Support depends on the light firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h4 id="transition" tabindex="-1"><a class="header-anchor" href="#transition"><span>Transition</span></a></h4><p>For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property <code>transition</code> to the payload which is the transition time in seconds. Examples: <code>{&quot;brightness&quot;:156,&quot;transition&quot;:3}</code>, <code>{&quot;color_temp&quot;:241,&quot;transition&quot;:1}</code>.</p><h4 id="moving-stepping" tabindex="-1"><a class="header-anchor" href="#moving-stepping"><span>Moving/stepping</span></a></h4><p>Instead of setting a value (e.g. brightness) directly it is also possible to:</p><ul><li>move: this will automatically move the value over time, to stop send value <code>stop</code> or <code>0</code>.</li><li>step: this will increment/decrement the current value by the given one.</li></ul><p>The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up. To do this send a payload like below to <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><p><strong>NOTE</strong>: brightness move/step will stop at the minimum brightness and won&#39;t turn on the light when it&#39;s off. In this case use <code>brightness_move_onoff</code>/<code>brightness_step_onoff</code></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving brightness down at 40 units per second</span></span>\n<span class="line">  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving brightness</span></span>\n<span class="line">  <span class="token string-property property">&quot;brightness_step&quot;</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token comment">// Increases brightness by 40</span></span>\n<span class="line">  <span class="token string-property property">&quot;color_temp_move&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving color temperature up at 60 units per second</span></span>\n<span class="line">  <span class="token string-property property">&quot;color_temp_move&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stop&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving color temperature</span></span>\n<span class="line">  <span class="token string-property property">&quot;color_temp_step&quot;</span><span class="token operator">:</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token comment">// Increase color temperature by 99</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum"><span>Power on behavior (enum)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>previous</code>, <code>off</code>, <code>inverted</code>.</p><h3 id="length-numeric" tabindex="-1"><a class="header-anchor" href="#length-numeric"><span>Length (numeric)</span></a></h3><p>LED strip length. Value can be found in the published state on the <code>length</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;length&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;length&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>10</code>. The unit of this value is <code>m</code>.</p><h3 id="min-brightness-numeric" tabindex="-1"><a class="header-anchor" href="#min-brightness-numeric"><span>Min brightness (numeric)</span></a></h3><p>Minimum brightness level. Value can be found in the published state on the <code>min_brightness</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;min_brightness&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_brightness&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>99</code>. The unit of this value is <code>%</code>.</p><h3 id="max-brightness-numeric" tabindex="-1"><a class="header-anchor" href="#max-brightness-numeric"><span>Max brightness (numeric)</span></a></h3><p>Maximum brightness level. Value can be found in the published state on the <code>max_brightness</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;max_brightness&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_brightness&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="audio-binary" tabindex="-1"><a class="header-anchor" href="#audio-binary"><span>Audio (binary)</span></a></h3><p>Enabling audio. Value can be found in the published state on the <code>audio</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;audio&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;audio&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> audio is ON, if <code>OFF</code> OFF.</p><h3 id="audio-sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#audio-sensitivity-enum"><span>Audio sensitivity (enum)</span></a></h3><p>Audio sensitivity. Value can be found in the published state on the <code>audio_sensitivity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;audio_sensitivity&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;audio_sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="audio-effect-enum" tabindex="-1"><a class="header-anchor" href="#audio-effect-enum"><span>Audio effect (enum)</span></a></h3><p>Audio effect. Value can be found in the published state on the <code>audio_effect</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;audio_effect&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;audio_effect&quot;: NEW_VALUE}</code>. The possible values are: <code>random</code>, <code>blink</code>, <code>rainbow</code>, <code>wave</code>.</p><h3 id="preset-numeric" tabindex="-1"><a class="header-anchor" href="#preset-numeric"><span>Preset (numeric)</span></a></h3><p>Preset index (0-6 default presets). Value can be found in the published state on the <code>preset</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;preset&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>32</code>.</p><h3 id="speed-numeric" tabindex="-1"><a class="header-anchor" href="#speed-numeric"><span>Speed (numeric)</span></a></h3><p>Effect speed. Value can be found in the published state on the <code>speed</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;speed&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;speed&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>100</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',35))])}]]),n=JSON.parse('{"path":"/devices/LGYCDD01LM.html","title":"Aqara LGYCDD01LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara LGYCDD01LM control via MQTT","description":"Integrate your Aqara LGYCDD01LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-09-01T13:40:11.000Z"},"headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"Power on behavior (enum)","slug":"power-on-behavior-enum","link":"#power-on-behavior-enum","children":[]},{"level":3,"title":"Length (numeric)","slug":"length-numeric","link":"#length-numeric","children":[]},{"level":3,"title":"Min brightness (numeric)","slug":"min-brightness-numeric","link":"#min-brightness-numeric","children":[]},{"level":3,"title":"Max brightness (numeric)","slug":"max-brightness-numeric","link":"#max-brightness-numeric","children":[]},{"level":3,"title":"Audio (binary)","slug":"audio-binary","link":"#audio-binary","children":[]},{"level":3,"title":"Audio sensitivity (enum)","slug":"audio-sensitivity-enum","link":"#audio-sensitivity-enum","children":[]},{"level":3,"title":"Audio effect (enum)","slug":"audio-effect-enum","link":"#audio-effect-enum","children":[]},{"level":3,"title":"Preset (numeric)","slug":"preset-numeric","link":"#preset-numeric","children":[]},{"level":3,"title":"Speed (numeric)","slug":"speed-numeric","link":"#speed-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1728565419000},"filePathRelative":"devices/LGYCDD01LM.md"}')}}]);