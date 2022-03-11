import{ManualLoginWithPasteCookies} from "../../../../support/pageobjects/login-with-manually-paste-cookies";
import {Gallery} from "../../../../support/pageobjects/Gallery/gallery";


let manualLogin = new ManualLoginWithPasteCookies();
let gallery = new Gallery();

const singleLocUserCookie = '';
const maltyLocUser ='ORmdqIeRB8oRh7pqGCdxsgEvl7YpW9vlOlHEe0sErcbDGAM4P7HadjFwh3WShyWObYk0YmD0mnbl0cCaL3VmPbrOZvpOFqXlum6_OnsuM1ZsKgYxrxi6012Fh9IOcL-N4uqPah7X-7sU6kuuYzodYv6Hs8QrjD7uXek3LzmHf_-7c07zLQGINlEc5UEtpwRNbZPlnRBPo-Ap5W_8thJ3fxpCsW43eNaAIFArYX3Yi3ddNr2UQJKb-sFU1vJJBRA6Rh8vmSZmeIygueCDXoi_bEewPFYRHtUUeh4xGO-iQYwXqQIYcwMzSkUNdSiy2gfTN_Z2vnBrOucjsS8GDLbYEiUbFVwwO0Padx728MVionawn4ohXZdsXs4FjgLV79Y8it4FdbO9S3aqAh9DGoyucgjsphgVTxwwaS7E4bzEwc5DXwB5h64x5JFOXvayo0LiSsCiSy1HUy_aT9MN7obUrbrFHMPN2uC02DzYy0Z27N-MV697VMtOezwTgjvKk0OrmYMtoNNApXRn5Yljnl9dbz9yLFSSTw2oYojZgyJql2D6kEtYQVLPNY-BoQegRAw1hjnj-vofHL672NKdo6ZPvg6uvG9btaimYkbNw8H2DN-9vq2WK9XktedYchxYIkMuhw9DiGQmZgteAZKI0Xge7wWRATT-RPVP9u6jMPD3SKBhXXAuMi3Z_kY45j4BK0Ekp6j8hIa-jTnTI8aGwmk21ouxUxvHIaYmqP-v7oGUJ6jjh7zDOUq0U7NAOo3TlSqwFqS4o7A0rbbuDpJdQo3oC9aIxruqWr7WUJ8Kn_0w9vsRvFqFaq75dmEirV7logASWTBtmA4JCdxsU_NLRkTiC87Ru6JXBTo8_Nk9JXI4Ydo8_k52SADxtPur2-NH003l4WljrZjiLNdyxhKRoefK_4TAWvx0spMcux1WsfJOlevBUYRMVXnovEy3S_DPOgO6-i47SxxPI6jPhJebVOStwP49Z7SwrKXZK89yR5NWNR3G0_j13GuqYULoO3ZAuzmKJNc3t_437koMDcw5tNWxqz5119h8jEZ2w50Llpj0yzL4y-XREOLwOnV_tLaFJJc8OnFkz6UHkB2Q60QQG7UQlpCxTYCuM6TvZmK5olWjJXFiB036Ryx2P4HXcNyLkExSjGrIx0FRoxQlHxypIHxJ9rHTR3D9Yy2j3tzahM77igRkmmH5qltfXWQ3lRPcgkPwMZSOLP2oEaYBLEvQY05joiOuuz_P_i96h5hRLLdXDoo-r_SkP-_O9Ax2xsD5Eybvk-0-jMQOzWm4bV8l1v_ldwK5sJgNXWsxNh9pR-AeyAGibGesI5RCmRcfO8w9gQfH1OIkGEr8I_YneswWPGo3svhq3LHEB9YNCtSxq17LxGFrlmZX50RmX5vq6Zagyu8cjTIpkFQELincWH7krnUDLMzqnPATKWKVd5fruI7KVRqTtWjKntWYN8UppB3Z7mZTpnE3g2u7yagkYnnSDBLPMlFI7Qqjqug8ouMwHWvyVV-llOnNjAEj5U6fwxsshpT4gHpnni1Mip7Xes9j91bZ-z0bfACPkbJMSXRTCgQsbX7EjAt2WE87-mtibxnX4H9mKc1878TZhpNwXvFA5cx1E0KypSxDH6CEIIYF76AioeV8OlsxBqJKvr4Qs8dBZNbIqX8jB8suuAw05Od5QdcoIc_VLT5lm7sRwFjy5INNzbh4OxOwEo7xzgcmi0LDFa0zTM_DAKfYQUEUBIISAzv-RtSHbhLtDA0QgNieptsdUyutGpZLhFWIvzuzxfrBMu3QGOc7hNJcmeHYpt1WiAeLRUm7t4csekSHuGuhaJdixmpSpyKZnXEAvFLNE9Bhtl464FRBQho4Zzi77YBE3vlVPKOcHL3bTite_u6PV3-QWgNmQLQZP_ViVXSHE-JRLc4JlZ54BPuySPjuwIVDsJrAjExCc5zDXbW_k3lrhinkblbJudjYaOYYmfrnNxW_CyrTpQfP8kzmj_XOea8ZP1MFuQo15Cb6QxBK8m7CSr67idk6mzREln2Y1ricqy4QTqaoKHUwG1dzGDm6NvQk3B8UGiWVh9RwVaJsEBSrXfdLZTCRn9halC-j2gl0pVPeh_Z58hyWX-F0LX2sGXalDp0lix4bnPMr2APA1ss0_ndhMCKy9KN8MJXaZSXGtpR4wOHmkcjNcuJCrmqv2xMu9NwF3AlNyD9UTFnfYwNDtI2nD3yk7uu69aSIU9euZaWJlUjKvNtFjUFpa1ke0vPE3XvDe6ftXU14oUal3IxplfWOwvp84hn3rX9aQ3NUTMXpXPj59kMfLG4l_5hfHauhzXZrce7GgM25hBPhl2orYLhhozyQgw-dZN9GvYMvyF9eqJmXiLseXhd066Ncer3dhPL0nisan1EkxA5nyU0MvJqPV_HMQjNxJJjPLBqrd1dMuYsv6gXJeD0Vi22dHgwU8aIkRDAmc0hPcdx9V0pNTJa1POtM__fdnW96sjBjTooBzUc42yneVj_M2bdGVnOSG_lw7sj7uGUE8IVfd7BjujmOM_syF0KRS-eyE_mNhFj7M49FbkLfpd0PHoUcLw7KiLdJ7mWKMcGE6qfXlabaNeLZJa_HdUUcIDFE_TK3xBYB-RbwzQ3y5a4VRoL5jFa6mYCnH31l_GbkcV_DyZIr3u5Gdlk';
const maltyCustomerUser = 'kkFRCCsSkRJjoxm1RuWCrnF_KzU_Tvq56W99FVw5gR5iXojp89_dQcjHmyEDksRXe6mBQFQeI2Q3kwEYk2vvr3lhAyhdfj6U5mnL87Y_No7SwHLpXdxHRMCv4nFq1CvxG0yFJ0bFMrH7laZx9btFkj2z5a_vwMevDTJf9T195ipHo63dbgeUT0iSRsg40PHl8gkw15gFbTUiG8JnJOCzA08xcjBcqCDtxRegLnrSvMSNCjn8QBJCu8jmLE8rnGNR4seTsafKG5xJ6j5oqjVmddwlVOd7NaoJ0ru2mxAIU9gwxfolO6nKWPb-gYMJyzF2AFB24eM_TKgZOU7nXxzvBvVPyHiRtpAL-ENRaVcdYujT0wGY7FH_DbNXrDxDzlRlKDbySrWAF5gzPnuSsMpOWRLeoOXJIOCVr0MtdhG6OVrJmPOg-ohRjBMf2loB-kZZ23lfiZzWVBxCrJ8z82ZnqQEHrxkfZfnk6qiURlcrDzmYACJ-vden1V8LTbInaVG--ODnWirIbuOT_TU62W5PryLp0MDR3VGDBA3e5nXwRHRk1ICwzMdnLojascjby293TZ9HZYPtZ1P_OIIAROgUGJhKqcvKVq-Yv1lsdROVZMx2bckcPiyfGzmL1q0Hlq_VVP2qwwK-oeh_m1hPnqjSXNa4MG5xe5qZ4rnOBA1WBWwXgdazX7ocffPRaj1_b_fV_xuTfB-x9ttJY4NMnK_U7F2jservhSINxg8bWeRHRdXsegvzCokqFUF1UXP6_7TnNCtXbWGb_Z6sk9xI6GQ24zK2eT8DwXsoLirAshHW2mx5HB_NFQkqysCc67_dy74dWeNPYchn2KPgZz47hCV1Cthb1YO9QdfcY0EnJchUTi9auoT7W7TjwLF1_Ju_DVazHonj-KBxgj6YIz48-zKHwTJmG9N4DmNpNwlrmdWAvt5wkZGMuaHNhhWsH07nqX3rsaQ3nY4ctRl1aLPeOm26Tc8oyhYCVAvKbl1mysFG63Jpjh4PPNZol3EmBsFlKcMGFSE5Wl_nfMQ0DvEWdiEpe91I3PRtwu7jAFKF49klZVWXUmDQeAfnIi-D1W9qabMqVDmGLkqgh-BC_qfE-OkCVcQkuNL_t4ylQgsniRrx8Dz2lAUxlMbSSo-gYD9yeVQYAe_omip75aMK_Po6lKzJMspPz732RFoPOpom4NpqIwaRB-uere6fmgcCBoefiq4-E7PHJsAa-89jyvH7AAZCkATvrhhACgwGAiUkjDXGtAae9JiG_yG2m8byzU32nQvfVvnDfcW3LqT4y5A1TVo6iI1foG7A-wmTUy3eIdsSUFd_qgV7tXePgGAP1jVnt8rFtbWVUS2efe_KY2qlP0c4bcGB_FTxCtuNeDlbTkQG6vzkX44GdTLirbqFYeE8J-cjD7Ec2YavwiW8PjHPOaeB-4eevKw_iBJ6h_MT6WG88ytvHuPVggtMq3eb3sykQW7I-TcihDTPkkRUEIGl0O12Bs-uJaBldgYQt2raI39lhtFXYRnAQMbAycco6r4FxNyVeCVvAAyrbrwb7oGz5w7HRFJpBl4_iZ4owBe7BXBgBzyaV8Y9IdIphJMfeH8SuBGA4Vil_EyS1xfyzII7QOZ2PGJhZO5R2qHgnSSaGqeokjDGTD9AU3fTYiJyLwqbyEOUY0yaGbzgfq-56hPwszxXlBAoCx0vj0i2TTeFKjNAtYQ0s1_rJxL323Zlsu6luHcYlqtt4Wc9dVAEIKTObdZi_58i0IZflNYiSkaOLSYscROo-VMJtx4aRSo9XKpqjPZZkgG9lN0lWWQ_aPkJSSIyr8n0FbruHKsj1KfiSzemoG2hEATlAoyCmavdJO6t0JY4frarzMLV37zoA0cCJq9A09-U6cHDkQTMIo7Hm4YdUPDf56p6OzJ463DXdb-edoYrkN5teEVl4_9W9nSKDdAlxOQ8RARnKQgdkObN4jjd7rk6eRk3FcZf2hbB22up7YzUXWT3_0_OUWQfb_WaOmRSA1nBIGCV7-khvMFfjIqkOwU6y4CSj25xlFuP5JTyrlA-U8BYxato9dUFadxCJeiWSP0afLSJ3apKPCyaJtSxS6v7mI6RFmgwTqJW82p97GaQ3bBT7wdDrZuEK6bIuZ7dv36WqjcwJ9hGMqjUxJNFNh6NGwNXQeAm1NuHKnWHBANUGVn_NbCT9IpJ9hXKNVPbe-NWIQ0ex9Szcxtrnw6YxXXRAXGucFmf5Tua46RwvhLDkQmDDcJongoZzeSMRHqZMvM7an1k4qdNGPI39nTgkztbuY2cKw5I-7tgzONoP8TAe0FjMck6cgzCgXuwmHsoHdXJnmR-smG9xU0wWiVOCcTszqE3FN0fjf1YT5cwfRTMA3sWom4awCzuFKFUpuichS661iXm6r80UJOq5fXtNUQVSLZV-23QEMKlbsMM__dz35E8-UMMYGQggqtWElQYQYm13BiSUInTFX26hEJY-mm9ebbwasa05zXEL8BRBc8CxU8ScyYVhsgC37E9xmI2A42NPTB25o4D3DC9r9yCVN9-1zHeMTqADRHSl6c15ElKHxAmkRg7CTJlTJgsLjW529w-9EJlf7xiuTmcNS79VygoN_7Y_DZrWqhhYhYO9IAXFKsOZrf4rLeK_rXnSoJU7omuMbXhb0ghw7s_3Y3r672rVlpYYlAcsluV3SBVNDCbNFNCRW5-Ry-EDlVp5xdYt2xDC0y7QtCd-2wJPy48RKQ';

describe("Gallery page", function (){

    beforeEach(function (){
        manualLogin.manualLoginWithPasteCookies(maltyCustomerUser);
        cy.visit('/en/ProdCtrlGallery?from=2022-03-07&to=2022-03-13')
        gallery.approveObservationsForAllContexts()

    })


    it('should verify that there is images data successfully loaded for Lice Count context ', function () {
        gallery.liceDiagnosticsTypeFilter().click()
        gallery.customerDropdown().select('Bolaks AS')
        gallery.locationDropdown().select('Fusavika')

        gallery.imageContainer().should('be.visible')
    });

    it('should verify that there is images data successfully loaded for Ulcers Count context', function () {
        gallery.ulcersDiagnosticsTypeFilter().click()
        gallery.customerDropdown().select('Bolaks AS')
        gallery.locationDropdown().select('Fusavika')

        gallery.imageContainer().should('be.visible')
    });

    it('should verify that there is images data successfully loaded for Maturation Count context', function () {
        gallery.maturationDiagnosticsTypeFilter().click()
        gallery.customerDropdown().select('Bolaks AS')
        gallery.locationDropdown().select('Fusavika')

        gallery.imageContainer().should('be.visible')
    });

    it('should verify that there is images data successfully loaded for Snout damage Count context', function () {
        gallery.snoutDamageDiagnosticsTypeFilter().click()
        gallery.customerDropdown().select('Bolaks AS')
        gallery.locationDropdown().select('Fusavika')

        gallery.imageContainer().should('be.visible')
    });

})