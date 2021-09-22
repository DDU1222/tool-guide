<script lang="ts">
import Guide from '../utils/index'
// @ts-ignore
import { onMounted } from 'vue'

export default {
  setup() {
    onMounted(() => {
      const guide = new Guide({
        steps: [{
          element: '.section_5',
          placement: 'bottom',
          content: 'https://yppphoto.hibixin.com/yppphoto/8c936439588546be907df129bc48d1f0.png'
        }, {
          element: '.section_7',
          placement: 'bottomLeft',
          content: 'https://yppphoto.hibixin.com/yppphoto/dd4a5f0a24154e36a09c67e6f8496aef.png'
        }, {
          element: '.image_4',
          placement: 'bottomRight',
          content: 'https://yppphoto.hibixin.com/yppphoto/6114d84ed9aa425e97363abf98643813.png'
        }],
        storageKey: 'demo'
      })

      setTimeout(() => {
        guide.startStep()
      }, 2000)
    })


    return {}
  },
}

</script>

<template>
  <div class="flex-col container">
    <div class="flex-col group">
      <div class="flex-col group_1">
        <div class="flex-col section_1">
          <div class="flex-col group_2">
            <div class="justify-between group_3">
              <div class="flex-row">
                <div class="left-group flex-col view">
                  <div class="section_2"></div>
                  <img
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319646976442693455.png"
                    class="image"
                  />
                  <span class="text">开通贵族</span>
                </div>
                <div class="left-group flex-col view_1">
                  <div class="section_3"></div>
                  <img
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319646978586313119.png"
                    class="image"
                  />
                  <span class="text">钻石等级</span>
                </div>
                <div class="flex-col group_5">
                  <div class="section_3"></div>
                  <img
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319646982965827808.png"
                    class="image"
                  />
                  <span class="text">装扮</span>
                </div>
              </div>
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319646968536855006.png"
                class="image_4"
              />
            </div>
            <div class="flex-row group_6">
              <div class="flex-col items-end image-wrapper">
                <img
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319646987846958795.png"
                  class="image_5"
                />
              </div>
              <div class="flex-col group_7">
                <div class="flex-row group_8">
                  <div class="flex-col group_9">
                    <img
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319646983275376302.png"
                      class="image_6"
                    />
                    <span class="text_4">草莓小熊饼干</span>
                    <div class="bottom-group flex-row view_4">
                      <span>ID</span>
                      <span class="text_6">49249448</span>
                    </div>
                  </div>
                  <img
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319646985475666184.png"
                    class="image_7"
                  />
                </div>
                <div class="flex-row group_10">
                  <div class="flex-row section_4">
                    <img
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319646983825460774.png"
                      class="image_8"
                    />
                    <span class="text_7">24</span>
                  </div>
                  <div class="center-text-wrapper flex-col view_5">
                    <span class="text_8">青叔音</span>
                  </div>
                  <div class="center-text-wrapper flex-col view_6">
                    <span class="text_8">摩羯座</span>
                  </div>
                </div>
                <div class="bottom-group flex-row view_7">
                  <img
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319646985139519948.png"
                    class="image_9"
                  />
                  <img
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319646985207535500.png"
                    class="image_10"
                  />
                  <img
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319646985171657836.png"
                    class="image_11"
                  />
                </div>
                <div class="flex-col group_11">
                  <img
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319646983808002478.png"
                    class="image_12"
                  />
                  <span class="text_11">我就是我，是颜色不一样的烟火</span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-row group_12">
            <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319647068685514096.png"
              class="image_13"
            />
            <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319647068712234381.png"
              class="image_14"
            />
            <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319647068740730317.png"
              class="image_15"
            />
            <div class="flex-col items-center text-wrapper">
              <span>CP</span>
            </div>
            <div class="flex-col items-center text-wrapper_1">
              <span>基友</span>
            </div>
            <div class="flex-col text-wrapper_2">
              <span class="text_14">铁憨憨</span>
            </div>
          </div>
        </div>
        <div class="flex-col section_5">
          <div class="flex-col items-end group_13">
            <div class="flex-row section_6">
              <div class="flex-row">
                <img
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319647016451896162.png"
                  class="image_16"
                />
                <img
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319647014783963522.png"
                  class="image_17"
                />
              </div>
              <span class="text_15">60’’</span>
            </div>
            <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319647068772514206.png"
              class="image_18"
            />
          </div>
          <div class="flex-row group_15">
            <span>“是哪个小可爱来看我了”</span>
            <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319647016676476760.png"
              class="image_19"
            />
          </div>
        </div>
      </div>
      <div class="flex-row equal-division">
        <div class="equal-division-item flex-col items-center">
          <span class="text_17">关注</span>
          <span class="text_19">1370</span>
        </div>
        <div class="equal-division-item flex-col items-center">
          <span class="text_17">粉丝</span>
          <span class="text_19">28.5w</span>
        </div>
        <div class="equal-division-item flex-col items-center">
          <span class="text_17">成就</span>
          <span class="text_19">1370</span>
        </div>
        <div class="equal-division-item flex-col items-center">
          <span class="text_17">礼物</span>
          <span class="text_19">1370</span>
        </div>
      </div>
      <div class="flex-col group_20">
        <div class="flex-col section_7">
          <span class="text_27">配音秀</span>
          <span class="text_28">去看看</span>
        </div>
        <div class="flex-col line-tabs">
          <div class="flex-row group_21">
            <div class="flex-col items-center section_8">
              <span class="text_29">听说</span>
              <div class="section_9"></div>
            </div>
            <span class="text_30">CP挚友</span>
            <span class="text_31">礼物墙</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-col tab-bar">
      <div class="section_14"></div>
      <div class="flex-col group_25">
        <div class="justify-between section_15">
          <div class="flex-row group_26">
            <div class="flex-col items-center">
              <img
                src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319647072024714504.png"
                class="image_20"
              />
              <span>鱼塘</span>
            </div>
            <div class="flex-col items-center group_28">
              <img
                src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319647072026639447.png"
                class="image_20"
              />
              <span>聊天室</span>
            </div>
          </div>
          <div class="flex-row">
            <div class="flex-col items-center group_30">
              <img
                src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319647072020714780.png"
                class="image_20"
              />
              <span class="text_37">消息</span>
            </div>
            <div class="flex-col items-center group_31">
              <img
                src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319647072036682442.png"
                class="image_20"
              />
              <span class="text_38">我的</span>
            </div>
          </div>
        </div>
        <div class="section_16"></div>
      </div>
      <img
        src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319647072019556206.png"
        class="image_20 image_25"
      />
    </div>
  </div>
</template>

<style scoped>
.image_20 {
  width: 1.69rem;
  height: 1.69rem;
}
.equal-division-item {
  flex: 1 1 5.88rem;
  padding: 0.31rem 0;
}
.left-group {
  padding: 0.5rem 0;
  width: 5.88rem;
  position: relative;
}
.bottom-group {
  padding: 0 0.25rem;
}
.image {
  width: 2.75rem;
  height: 2.75rem;
  position: absolute;
  left: 0;
  top: 0;
}
.text {
  position: absolute;
  left: 2.25rem;
  top: 50%;
  transform: translateY(-50%);
}
.section_3 {
  margin-left: 0.25rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 0.88rem;
  height: 1.75rem;
}
.center-text-wrapper {
  padding-bottom: 0.06rem;
  background-color: rgba(234, 230, 255, 0.08);
  border-radius: 0.44rem;
  height: 0.88rem;
}
.text_17 {
  color: rgb(234, 230, 255);
  font-size: 0.75rem;
  line-height: 1.06rem;
  white-space: nowrap;
}
.text_19 {
  margin-top: 0.44rem;
  color: rgb(234, 230, 255);
  font-size: 1.13rem;
  line-height: 1.38rem;
  white-space: nowrap;
}
.text_8 {
  margin-left: 0.25rem;
  margin-right: 0.19rem;
}
.container {
  background-color: #181626;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
}
.group {
  flex: 1 1 auto;
  overflow-y: auto;
}
.tab-bar {
  height: 5.5rem;
}
.group_1 {
  height: 24.31rem;
}
.equal-division {
  margin-top: 1.88rem;
}
.group_20 {
  margin: 1.88rem 0 -6.25rem;
  padding-bottom: 14.19rem;
  position: relative;
}
.section_14 {
  margin-top: 3.38rem;
  background-color: rgb(12, 8, 29);
  height: 2.13rem;
}
.group_25 {
  margin-top: -5.5rem;
  padding-bottom: 0.25rem;
  position: relative;
}
.image_25 {
  margin-top: -2.34rem;
  align-self: center;
}
.section_1 {
  padding-left: 0.75rem;
  padding-top: 2.75rem;
  background-image: url('https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319647063348795399.png');
  background-size: cover;
  background-repeat: no-repeat;
}
.section_5 {
  margin-right: 1.88rem;
  margin-top: -4.19rem;
  padding: 0.63rem 0.75rem 0.75rem 1.31rem;
  align-self: flex-end;
  background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319647012999553524.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 12.44rem;
  position: relative;
}
.section_7 {
  margin-left: 1rem;
  padding: 0.75rem 0.75rem 2.44rem;
  background-image: url('https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319647063395340011.png');
  background-position: 0rem 0rem;
  background-size: 5.75rem 5.75rem;
  background-repeat: no-repeat;
  width: 5.75rem;
}
.line-tabs {
  position: absolute;
  left: 0;
  right: 0;
  top: 6.75rem;
}
.section_15 {
  padding-left: 1.5rem;
  background-image: url('https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319647063403150265.png');
  background-position: 0rem 0rem;
  background-size: 23.44rem 3.38rem;
  background-repeat: no-repeat;
}
.section_16 {
  filter: blur(0.06rem);
  border-radius: 50%;
  height: 3rem;
  position: absolute;
  left: 10.25rem;
  right: 10.19rem;
  top: 0.63rem;
  border: solid 0.24rem rgba(66, 255, 232, 0.19);
}
.group_12 {
  margin-top: 2.56rem;
  padding: 0 0.94rem;
  height: 2.88rem;
  position: relative;
}
.group_13 {
  padding: 0.25rem 0;
  color: rgb(120, 255, 224);
  font-size: 0.63rem;
  line-height: 0.75rem;
  white-space: nowrap;
  position: relative;
}
.group_15 {
  margin-top: 0.75rem;
  padding: 0 0.06rem;
  color: rgb(120, 255, 224);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.06rem;
  white-space: nowrap;
}
.text_27 {
  color: rgb(234, 230, 255);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.38rem;
  white-space: nowrap;
}
.text_28 {
  margin-top: 0.13rem;
  color: rgb(234, 230, 255);
  font-size: 0.75rem;
  line-height: 1.06rem;
  white-space: nowrap;
}
.group_21 {
  padding: 1rem 0;
}
.group_22 {
  position: relative;
}
.group_26 {
  align-self: center;
  color: rgb(63, 51, 122);
  font-size: 0.63rem;
  font-weight: 500;
  line-height: 0.88rem;
  white-space: nowrap;
}
.group_6 {
  padding-left: 0.25rem;
}
.image_13 {
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  left: 4.88rem;
  top: 0;
}
.image_14 {
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  left: 2.88rem;
  top: 0;
}
.image_15 {
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  left: 0.94rem;
  top: 0;
}
.text-wrapper {
  padding-top: 0.06rem;
  color: rgb(255, 255, 255);
  font-size: 0.5rem;
  line-height: 0.69rem;
  white-space: nowrap;
  background-color: rgb(255, 120, 237);
  border-radius: 0.38rem;
  width: 1.06rem;
  position: absolute;
  left: 1.63rem;
  top: 2.13rem;
}
.text-wrapper_1 {
  padding-top: 0.06rem;
  color: rgb(25, 24, 44);
  font-size: 0.5rem;
  line-height: 0.69rem;
  white-space: nowrap;
  background-color: rgb(120, 255, 224);
  border-radius: 0.38rem;
  width: 1.38rem;
  position: absolute;
  left: 3.44rem;
  top: 2.13rem;
}
.text-wrapper_2 {
  padding-top: 0.06rem;
  color: rgb(25, 24, 44);
  font-size: 0.5rem;
  line-height: 0.69rem;
  white-space: nowrap;
  background-color: rgb(120, 255, 224);
  border-radius: 0.38rem;
  position: absolute;
  left: 5.19rem;
  top: 2.13rem;
}
.section_6 {
  padding: 0.5rem 0.69rem 0.44rem 1.19rem;
  background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319647013028315995.png');
  background-position: 0rem 0rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.image_18 {
  width: 2.25rem;
  height: 2.25rem;
  position: absolute;
  left: 0;
  top: 0;
}
.image_19 {
  margin: 0.16rem 0.09rem 0.16rem 0.84rem;
  width: 0.88rem;
  height: 0.75rem;
}
.section_8 {
  padding-top: 0.63rem;
  color: rgb(255, 212, 118);
  font-size: 1.38rem;
  font-weight: 500;
  line-height: 1.88rem;
  white-space: nowrap;
  background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319647012974792839.png');
  background-position: 0rem 0rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 4.75rem;
  height: 3.13rem;
}
.text_30 {
  margin-left: 0.5rem;
  margin-top: 1.13rem;
  color: rgba(234, 230, 255, 0.5);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.38rem;
  white-space: nowrap;
}
.text_31 {
  margin-left: 1.5rem;
  margin-top: 1.13rem;
  color: rgba(234, 230, 255, 0.5);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.38rem;
  white-space: nowrap;
}
.section_10 {
  margin: 0 1rem;
  padding: 0.75rem 0 5.5rem;
  overflow: hidden;
  border-radius: 1rem 1rem 0 0;
  background-image: linear-gradient(
    180deg,
    rgb(23, 21, 35) 0%,
    rgb(23, 21, 35) 0%,
    rgb(29, 30, 61) 99.49%,
    rgb(29, 30, 61) 100%
  );
  height: 8.06rem;
  position: relative;
}
.section_12 {
  box-shadow: inset 0rem 0rem 0.5rem 0rem rgb(120, 255, 224);
  filter: blur(0.12rem);
  border-radius: 50%;
  height: 3rem;
  position: absolute;
  left: 10.25rem;
  right: 10.19rem;
  top: 50%;
  transform: translateY(-50%);
  border: solid 0.12rem rgb(66, 208, 255);
}
.section_13 {
  box-shadow: inset 0rem 0rem 0.5rem 0rem rgb(120, 255, 224);
  filter: blur(0.23rem);
  border-radius: 50%;
  height: 3rem;
  position: absolute;
  left: 10.25rem;
  right: 10.19rem;
  top: 50%;
  transform: translateY(-50%);
  border: solid 0.12rem rgb(66, 247, 255);
}
.group_28 {
  margin-left: 2.94rem;
}
.group_30 {
  align-self: center;
  color: rgb(63, 51, 122);
  font-size: 0.63rem;
  font-weight: 500;
  line-height: 0.88rem;
  white-space: nowrap;
}
.group_31 {
  margin-left: 1.47rem;
  padding-bottom: 0.31rem;
  color: rgb(255, 212, 118);
  font-size: 0.63rem;
  font-weight: 500;
  line-height: 0.88rem;
  white-space: nowrap;
  overflow: hidden;
  width: 4.69rem;
  height: 3.38rem;
}
.image_4 {
  margin-right: 0.75rem;
  align-self: center;
  width: 1.88rem;
  height: 1.88rem;
}
.image-wrapper {
  margin-top: 4.25rem;
  padding: 6rem 0 0.25rem;
  filter: drop-shadow(0rem 0.13rem 0.75rem rgba(31, 5, 61, 0.56));
  background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319646987327094310.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 7.75rem;
  height: 7.75rem;
}
.group_7 {
  margin-left: 0.75rem;
  flex: 1 1 auto;
}
.text_14 {
  margin: 0 0.19rem;
}
.text_15 {
  margin-left: 2.44rem;
}
.text_29 {
  text-shadow: -0.06rem -0.06rem 0.13rem rgb(255, 80, 80);
}
.section_9 {
  margin-top: 0.38rem;
  background-color: rgb(255, 212, 118);
  box-shadow: -0.06rem -0.06rem 0.13rem 0rem rgb(255, 80, 80);
  border-radius: 0.13rem;
  width: 1rem;
  height: 0.25rem;
}
.group_23 {
  margin-left: 0.5rem;
  padding: 0.25rem 0 0.5rem;
  width: 7.75rem;
  position: relative;
}
.group_24 {
  color: rgba(234, 230, 255, 0.8);
  font-size: 0.88rem;
  line-height: 1.31rem;
  width: 19.44rem;
  position: absolute;
  right: -1rem;
  top: -1.38rem;
}
.text_37 {
  margin-top: 0.13rem;
}
.text_38 {
  margin-top: 0.47rem;
}
.view {
  color: rgb(255, 212, 118);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.06rem;
  white-space: nowrap;
}
.view_1 {
  margin-left: 0.25rem;
  color: rgb(234, 230, 255);
  font-size: 0.75rem;
  line-height: 1.06rem;
  white-space: nowrap;
}
.group_5 {
  margin-left: 0.25rem;
  padding: 0.5rem 0;
  color: rgb(234, 230, 255);
  font-size: 0.75rem;
  line-height: 1.06rem;
  white-space: nowrap;
  width: 4.38rem;
  position: relative;
}
.image_5 {
  margin-right: 0.25rem;
  width: 1.5rem;
  height: 1.5rem;
}
.group_10 {
  margin-top: 0.44rem;
}
.view_7 {
  margin-top: 0.38rem;
}
.group_11 {
  margin-top: 0.69rem;
  padding: 0 0.25rem;
  color: rgb(234, 230, 255);
  font-size: 0.75rem;
  line-height: 1.06rem;
  white-space: nowrap;
  height: 1.31rem;
}
.image_16 {
  width: 1.38rem;
  height: 0.75rem;
}
.image_17 {
  margin: 0.25rem 0 0.25rem 0.19rem;
  width: 1.69rem;
  height: 0.25rem;
}
.text_32 {
  color: rgba(234, 230, 255, 0.3);
  font-size: 0.75rem;
  line-height: 1.06rem;
  white-space: nowrap;
}
.text_33 {
  color: rgb(234, 230, 255);
  font-size: 1.5rem;
  line-height: 1.81rem;
  white-space: nowrap;
  position: absolute;
  left: 0;
  top: 0;
}
.section_11 {
  filter: blur(3.13rem);
  background-image: url('https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/6145cd32a3164600111a4321/6145cd8ba3164600111a4357/16319647059212882368.png');
  background-size: 100% 100%;
  width: 11.5rem;
  height: 9.44rem;
}
.text_34 {
  text-align: left;
  width: 10.25rem;
  position: absolute;
  left: 0;
  top: 4.25rem;
}
.section_2 {
  margin-left: 0.25rem;
  background-image: linear-gradient(
    90deg,
    rgba(156, 104, 50, 0.2) 0%,
    rgba(156, 104, 50, 0.2) 0%,
    rgba(189, 75, 0, 0.2) 100%,
    rgba(189, 75, 0, 0.2) 100%
  );
  border-radius: 0.88rem;
  height: 1.75rem;
}
.group_9 {
  flex: 1 1 auto;
}
.image_7 {
  margin-left: 0.94rem;
  margin-top: 3.75rem;
  width: 5.94rem;
  height: 3rem;
}
.section_4 {
  padding: 0.13rem 0.38rem 0.06rem 0.5rem;
  color: rgb(80, 139, 255);
  font-size: 0.56rem;
  line-height: 0.69rem;
  white-space: nowrap;
  background-color: rgba(234, 230, 255, 0.06);
  border-radius: 0.44rem;
  height: 0.88rem;
}
.view_5 {
  color: rgb(80, 139, 255);
  font-size: 0.56rem;
  font-weight: 500;
  line-height: 0.81rem;
  white-space: nowrap;
}
.view_6 {
  margin-left: 0.25rem;
  color: rgb(159, 128, 255);
  font-size: 0.56rem;
  font-weight: 500;
  line-height: 0.81rem;
  white-space: nowrap;
}
.image_9 {
  margin: 0.13rem 0;
  width: 3.56rem;
  height: 0.88rem;
}
.image_10 {
  margin-left: 0.25rem;
  width: 2.56rem;
  height: 1.13rem;
}
.image_11 {
  margin: 0.13rem 0 0.13rem 0.25rem;
  width: 2.13rem;
  height: 0.88rem;
}
.image_12 {
  width: 1.13rem;
  height: 0.63rem;
}
.text_11 {
  margin-top: -0.38rem;
}
.image_6 {
  width: 4.5rem;
  height: 4.5rem;
}
.text_4 {
  margin-left: 0.25rem;
  color: rgb(234, 230, 255);
  font-size: 1.13rem;
  font-weight: 500;
  line-height: 1.56rem;
  white-space: nowrap;
}
.view_4 {
  margin-top: 0.31rem;
  color: rgb(234, 230, 255);
  font-size: 0.75rem;
  line-height: 0.88rem;
  white-space: nowrap;
}
.image_8 {
  margin-bottom: 0.13rem;
  width: 0.5rem;
  height: 0.5rem;
}
.text_7 {
  margin-left: 0.13rem;
}
.text_6 {
  margin-left: 0.41rem;
}
</style>
