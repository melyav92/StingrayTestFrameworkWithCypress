import {ManualLoginWithPasteCookies} from "../../../../support/pageobjects/login-with-manually-paste-cookies";
import {LiveVideo} from "../../../../support/pageobjects/LiveVideo/live-video";


let manualLogin = new ManualLoginWithPasteCookies();
let liveVideo = new LiveVideo();


describe("Live video page",function () {
    beforeEach(function () {
        manualLogin.manualLoginWithPasteCookies('99B_j3TnSLz_4xQFQ5sSheRjR7zPjTU4Cf-TuWdJWh0q05Vd0X8SlSVKcfhypAJb19427lDG-MoVpNYxR2rwlpvMmBhtar0azBOxlIymKqmUhMqNAT1WEnury1hdL1iojqJXWkK-5WzQGmPssbf9kbLQQCjFBTSGMpC1GE5kgGib14BTTm7uVevtg1vmfdlCtCnpEDQqyIMkFpHl6i8-TnX-dJ9neuXC3jTtiCN1yNHaslnA_FsnxwIwcD85GBAKMsjK0VLsUtNnZSFTQFrF4tZSI4ceYPPUOAMhIMGYO7eA04hwYzWUSzFAY86fK_EKyJ96sCr0F6QxeOLufMRgVLP5HtehgaGTXwnVImf9xPcFkB2Eg4PjaRFKOxfkmWn9r2h62oqK_YLcu_eDlTErzXsu2xshUOWUe8QZqJx8QNwkHhEDfj3Hspc14bO3fFe3nA-PwdfUwn0gVqON_tT0aQuxkQTnB3q0k8xzPRgyYbT1vlR1m0R9jUhuaUv17juAPJNaUxW88n9RCPxwNlx5lVE3awMUhlaeVV5J-dvVr0Rq0HQa8SP3PJYoSqRNx8j72YlEUlkDAY3zDxdYFiMb-77JUYwV6kXqNsO8UI03FmfDAvXhyMbfnhts75c5qCJrNnAEIfZTcK5RR9EJcMS1grnmsAM6xj4If75h3ea1MEZePjMzUAnv7jaSGA5nL-ci6lmFaLsAW-kT4gh1sxGU0tPnKzhPrwGe76aDGV6Gy60ZiiCm4IFSQ_EzSfoNgCjyeAQLShxe9_ioENuLQpduVdmJbEkJjq8c1fO4i2oyQAeAguLbaFx7Q_xcO8rfyKxJLQvFBzKNg1c8xgS8wpdPmn_cjGNRi3spxhSpkY6_ndNUPFIMbKO6MYaUu-FqD6eirobm2hna7OSd6W_pzznw3v5i5stfvDSb0rByp8dkorF8RgR7z2BnYZk995WM_9kRT0pCIDPY3hPBtv1slVmZ0UA_P2QGR3TdDRlv5sFNXpVDa4F4i8Gx4p6-nkBZM0MzrgBMvZ4I-hRFbx6tnnOmlM0jDLixVyxTfXIU90-pPk1uYKYC1TFeEWXXy_pE6-7_8o3uvj8oNJENSzh-fb8d__g7WX7_pYjOgG5aHflSokept1vYn_gPWesyK22oOS8sj5KkSLUsjMdrFWnKKc250enaanzvHpN5qCu-Tk6HwVAkKHtdtFrYdIIrtMmDa3C-UhIiwCtx9wG6Phpmd1vAL6XvyGiXg3oIXwKjnoKDO9GuhruT0M7s46lNERu7J53uECqx4lCwewe4a-0v_Jtnh1c2taYgQo4ioh5JoH9Ilb8AT6dSO_e0FpozhVhj6OkcuDoHAkNbjJCT_OVtfJU58Arn8pr5_g7Ccq5_aI8fs2mcM095m-4wJrY-tk6jFkctyoRmD_AnGAlKuImof3HGDGfwbAoK6iuh88H2M0U38PET2v_MLviylrxaB5isx9-H5egBXJqtcMCkhfnvJeIoGz4aW3Go2-YozQRNWsfav0vgaBAl7WhNQrG0jxMAWl-jViqW00i8DHmkvrOh8De43f_LZE8_zT1uMw295GK-ugHGffCC31tAqe-zKBpMpTb7msZi1xiCiBBehq1UaPLdwJJUGYv9cF2IPTQsPdv3BlQJO5r7nDGKchiwXggtZcaeKCx3kQolTfiXCrHqUJpyk5IMgS7_BjVJtjMH9s2_lhUq4zMoMgqeTSJTKdfULwEPIF_FInyT5yaGDGyYOUYpJrf_kDn4obtT01WBLM9VnGOPSLssrVCmmFuzVzzcX_qCVsFShYDMXCGkCoJahiy4h-XXlwPaRqPEhIQDCf6MRHAMWJVcwQ0SpbY6XlVvqZA1reodSfXkjBbxSUlRPqKPJ5FLBN0qKMuF073fVoMDCzY-MtHdup8q4DtO8K55X4DkjAbqcqLgJQ98u4bvw9bjhOhnVBwHga9nSjfRhiPLRYc5XCnbwsgYrJG0Stc_sn2oR5ygKwtBa3ZoqzxK3JyIdnrRFgf4idDkNu2GYnYFiR8nFwHesm9ZMIJr-3810Zd7BZ-3K2xDPeuB_2Qp-gpXOSTJ16mByqpeKOzV9_ni-gC4a6GpoMHv-kL8yjzWnGNGKkCs1rDnMjcAhZUpsaPIL3qEa_NoxqKwbighInd0sxc8hYDiI_3xxBv1j-8QGmcCXv4Dc1OYYwMv3CxYMxubPAHlzlN2bp0lihWqRRdbYi07YYNPiIjiJHL9FOcOA8qH0YPcJ5cXt7SaopWfHv1oKjRJ-f1nGffSQlMFI1k1ZHRQg43mKMlSV0EBvWvBqyOstIzet1BiNG9bXty48A3fBB7eFs8-34db2nXw0XzLI-SFBlzCBZlDpqH2B_sOwxSoj_2UQY1SvH3BC0Ku8wSyOpGzD71ohvl_hz49Jp-1MV5ZSyuWV9zHNARd2Q7PAWFhsEJtL2Wpu0f5ltPgJ6h5uNeqVkMTu46VXBKP_VbLjAWU5VJzwuCj59kNfBOPpWvRXzoAMycddaOWgTyF-1_FiZ8h1xSOdz06gd3wjHr_oRC3C62JS8oU0ztf5vuaheCN-V171hbNBBZXR8JPu6cwNJg13x3KnMZxLS3PrfAnhfA')
        cy.visit('/en/Live/Video')
        liveVideo.selectCustomerLocationIfPopupOpen()

    });

    it('should verify that there is streaming available for Su Detection Camera type', function () {
        liveVideo.selectSuDetectionCameraFilter()
        liveVideo.nodeCameraBoxWithStreaming().should('have.class', 'scp-camera-stream-image-block')
    });

    it('should verify that there is streaming available for Su Color camera type', function () {
        liveVideo.selectSuColorCamFilter()
        liveVideo.nodeCameraBoxWithStreaming().should('have.class', 'scp-camera-stream-image-block')
    });

    it('should verify that there is streaming available for Su Far camera type ', function () {
        liveVideo.selectSuFarCamFilter()
        liveVideo.nodeCameraBoxWithStreaming().should('have.class', 'scp-camera-stream-image-block')
    });

    it('should verify that there is streaming available for Bu Periscope Home camera type', function () {
        liveVideo.selectBuPeriscopeHomeFilter()
        liveVideo.nodeCameraBoxWithStreaming().should('have.class', 'scp-camera-stream-image-block')
    });

    it('should verify that there is streaming available for Bu Periscope Away camera type', function () {
        liveVideo.selectBuPeriscopeAwayFilter()
        liveVideo.nodeCameraBoxWithStreaming().should('have.class', 'scp-camera-stream-image-block')
    });

    it('should verify that there is streaming available for Bu Down camera type', function () {
        liveVideo.selectBuDownCamFilter()
        liveVideo.nodeCameraBoxWithStreaming().should('have.class', 'scp-camera-stream-image-block')
    });

})