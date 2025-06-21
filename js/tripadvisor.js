setInterval(function () {
    $("#CDSWIDSSP").css({ "width": "100%" });
    $("#CDSWIDSSP .widSSPData .widSSPOneReview .widSSPBullet li").css({ "width": "100%" });
    $("#CDSWIDSSP .widSSPData .widSSPOneReview .widSSPBullet li").css({ "height": "inherit" });
    $("#CDSWIDSSP .widSSPData .widSSPAll .widSSPReadReview li, #CDSWIDSSP .widSSPData .widSSPAll .widSSPWriteReview li").css({ "height": "20px" });
    $("#CDSWIDSSP .widSSPData .widSSPAll .widSSPReadReview").css({ "width": "100px" });
    $("#CDSWIDSSP .widSSPData .widSSPAll .widSSPReadReview").css({ "float": "left" });
    $("#CDSWIDSSP .widSSPData .widSSPAll .widSSPWriteReview").css({ "width": "100px" });
    $("#CDSWIDSSP .widSSPData .widSSPAll .widSSPWriteReview").css({ "float": "left" });
    $("#CDSWIDSSP .widSSPData .widSSPAll .widSSPReadReview li, #CDSWIDSSP .widSSPData .widSSPAll .widSSPWriteReview li").css({ "width": "100px" });
    $("#CDSWIDSSP .widSSPData .widSSPAll .widSSPReadReview li, #CDSWIDSSP .widSSPData .widSSPAll .widSSPWriteReview li").css({ "float": "left" });
    return false;
}, 3000)