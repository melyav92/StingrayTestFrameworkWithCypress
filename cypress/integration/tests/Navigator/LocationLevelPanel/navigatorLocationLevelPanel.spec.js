import {NavigatorLocationLevelPanel} from "../../../../support/pageobjects/Navigator/LocationLevePanel/navigatorLocationLevelPanel";
import {ManualLoginWithPasteCookies} from "../../../../support/pageobjects/login-with-manually-paste-cookies";

const maltyLocUser = "";
const maltyCustomerUser = "oJlo7dIoMZjDgwa_cBwUcNU00POp0oYsBKTSQYBYgMdr8PvP8wpmBmDlAp0Wp7I91g5IGsqsQc_uW5biHDfujyCEeugl4FQSW5JZddowYVK2jtUpdG-XJK7dDAQFT0L2yZQfigBo21aYZy6UD3rnXrRgopXn2uZKchbvEWMg8Y_CerOLtVUNxXe_2U2HABuj63wZiUd2IV_WIg6yDQKEDefkWh7nmDfTG5o2TLIY9i_joxYzEcioVU_ESTgCmFNXAQz11CjkfsrkpEUYdJyBUSOXP09GaYw-qpATwoZkFFLyVmn3dpqnjnFISOTArm7s0pDf8mSLyg7zG3yoJB31AZnnZ__59SDzDCQVUB08flvTAXwG4OqHAN5GOemdQCicjbdNLQ8Zb5AHeUWDuLu-dQj9xRVis6L23dXfxV82I--DmB2z0zp2KdiWcHBXPBCzCGsY5_1tGlrvpXbaPymYOgCdjIcBlv2lmrSEnxTP-MkXLpurZzuf_XTvELuosgGaYdwKKufG4074vrc1nGm65g7wrQnUdIFOATOPSc3NeZ713oPOnWuTDDmt-ull-gwzhokz0P04vG5OIYDfqXT8dbeQ_zxqGektbg6su-ll9VQrNpsDOdxPfn54kf1cxDo0EPM37ThPkxkhOc-W7vEq2ZvqFNO51eMShCfxsuKEmho0lZy24kaf5oG-CGzOYyXVJyOSn_f2EvJSl0UZqTtyXx9MbKdsu7vUQQaOEwxvIijPA5ROqpyGvBr2t9tvoP6n7kzgg-L9JLCDo2ddG4SRW4dQJLujLPMPzk_fFSsUfxnr8TNESrEovqotdaNmemVFr1GPcArLNwRsah3lOYcsQQkw2Z3tAFQIQbm4UwYVosfIwyuI1rj-cp82EtOXWWCYHd7KOlKC3FvgwLSQjIEXe6lGKWvUFOPstqIMORplh4pSMXqrYqUpeENBwKX4FxA0y2wX6lXlBxxPiuIXKPi2qXxzaMeCPXhB16XoksKT6n6ytwZp8qDBldCaC3HF_T_KsDJvxSfsPu768rUJNkmbQgnR0xW7bKImmY277Fry3MNZtSQ8WcE9BJB_pwSvtc7c7PLJYqggYxjhw7Enm1Se14zww8Q66TMc0piUkZptacQvwBHrP0i7s7D29zmNz97oXxJNJU4pHCz89ZnMeuLj-uC8v75D8zzCIuDfEQ_IbYk-669EthOflJ8GyiNURNNAvPL8pXdfjg9IFkGtP_cmdCfeVYsfIwaWXA50JnlZOiw1CWcC10VPO1d1WlLf0sOyMGhb82-FlvdCwaZV6zA68b4sD4vfi881euAQO9cU4jQzeZHTX-GjdIykcQTtSlGLvuZev0j7gSRN6YbiwpDwV1nGKpVczryAd35IWrYIqXBY-ABHoQb9v3Dqd4xe_X5sjLLlxEGvlpC99_mS3kBNZwn_no3xq42VvL00wpEl3Ixy1SO0KbyH--36uKbmqyoviIwGtzjSCEIY8ZTNM-QnRnvXg1jDKBUlYBec6UAC0p2Infy46tCasn22YtFvI6zThk1uNgubmHRsKNE9nWxUrB1TaAvVNLb8fcfV5yq1XNnsn0_zJKV82EoEZVCvL7YrU8T1czXEizKXZalk4YQG0aJ19p4Ptk53N8QQjOHqcLNsw3UT5SIgOnp3CBdl-yf0glgWfrMPp6kYnAV2K7OoJUqvYzLIjB9c9PBKS8QBJ4H56Cvk7tfOot8Ts50koIV0_P9LHowsvqJXti4iiF692L-EOzuVZUhj3m0bTx7uPGzT3YKvI9mAamt-xcLfAjhXQN7mX7CHbQtV0TtAABHPSP3wbtl1oHD7j1CIfVooOXfssSyJAhK7-TF15QxN3xIPd40TWDhn2jtcgypWO98kyj7jq8J7fbzZwcfTbOqa1V4M19EzGD6plxbpaoKpE-xtDD9-dKmg6lre6t8VmiKNnWIlcHy_sJvFUnOHBzDYD5sTz3gPHYL8_mpjlo1rWowHcsF3uStIqE1r3ozJ5p_5iUqQhrjXYC-yvvzxPBYT7cKvmvBrh6JxdT5CBksKx6DAAzn-ETEO_MOFc5KsOAL9Dl8huGV4msbgjS2iJGVK2994cTb3s4imbZ6opU4Lh_VA9ZurjdGjkRz-YcfbJY1Ba0v6wtSjcaxFL9XOn4LVxZq_wBa-0ciktJ4JJlLTvukqtquNFwpBx3lUm1tm1FTKoEQ17hOVffnbZNqr49_NYhIDnpxqKpT07vksC8fjU2MGKzQD8QSCmXZgM6NmA7q06U0zjr1kHwbiJ6vFEQvVZ55Zjsr-8NH9M7fumy2zNGmy-yWSOvfx5U4Gic0xnKMAmFM98j5jJSTceEUbgelS-ncujr2GsGIC8run-0nu8PEHi-pkkb6VceXjtn7IdwLb60_4Jq8IRJaVTG4fCnCzay7M9aO1kGSpt93jYAKzLtDNOouFnWW2NRBgmsO85wo3bL2lR_P_HES2Iu9eVmAJ7Dd_1a-M-Ca506wVcCA3Mfna9lT3kQF870c0nbgN50ZuzbtjD5QAGvU0NeXUdwQ2FaQOdLtKxttOx3ti6AyZZBKvhiJ16fSvMYn7g4G2GvoPnH2U2xrj0IFgK-4Ex5HljQI";
const singleLocUser = "";

let manualLogin = new ManualLoginWithPasteCookies();
let navigatorLocation = new NavigatorLocationLevelPanel();

describe("Navigator location level panel", function (){

    beforeEach(function (){
        manualLogin.manualLoginWithPasteCookies();
        cy.visit('/en/Navigator/Location');
        navigatorLocation.selectCustomerOrAndLocationIfDropdownsExist();

    });

    it('should verify that there is streaming available for Su Detection camera types', function () {

        navigatorLocation.selectSuDetectionCameraType()
        navigatorLocation.nodeCameraBoxWithStreaming().should('have.css', 'display', 'inline')
            .and('have.attr', 'src')
    });

    it('should verify that there is streaming available for Su Color camera type', function () {
        navigatorLocation.selectSuColorcamCameraType()
        navigatorLocation.nodeCameraBoxWithStreaming().should('have.css', 'display', 'inline')
            .and('have.attr', 'src')
    });

    it('should verify that there is streaming available for Su Far camera type ', function () {
        navigatorLocation.selectSuFarcamCameraType()
        navigatorLocation.nodeCameraBoxWithStreaming().should('have.css', 'display', 'inline')
            .and('have.attr', 'src')
    });

    it('should verify that there is streaming available for Bu Periscope Home camera type', function () {
        navigatorLocation.selectBuPeriscopeHomeCameraType()
        navigatorLocation.nodeCameraBoxWithStreaming().should('have.css', 'display', 'inline')
            .and('have.attr', 'src')
    });

    it('should verify that there is streaming available for Bu Periscope Away camera type', function () {
        navigatorLocation.selectBuPeriscopeAwayCameraType()
        navigatorLocation.nodeCameraBoxWithStreaming().should('have.css', 'display', 'inline')
            .and('have.attr', 'src')
    });

    it('should verify that there is streaming available for Bu Down camera type', function () {
        navigatorLocation.selectBuDowncamCameraType()
        navigatorLocation.nodeCameraBoxWithStreaming().should('have.css', 'display', 'inline')
            .and('have.attr', 'src')
    });




})

