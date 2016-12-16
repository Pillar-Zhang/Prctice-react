import React, {Component, PropTypes} from 'react';
import '../sass/colStyle.scss';

class Col extends Component {
     componentDidMount() {

        var ResetPosition = [
            {},
            { top: '0px', left: '0px', width: '225px', height: '419px' },
            { top: '0px', left: '235px', width: '225px', height: '248px' },
            { top: '258px', left: '235px', width: '225px', height: '161px' },
            { top: '0px', left: '470px', width: '225px', height: '419px' },
            { top: '0px', left: '705px', width: '225px', height: '248px' },
            { top: '258px', left: '705px', width: '225px', height: '161px' },
            { top: '0px', left: '940px', width: '225px', height: '419px' },
            { top: '429px', left: '0px', width: '577px', height: '196px' },
            { top: '429px', left: '587px', width: '578px', height: '196px' },
        ]

        var NotePostion = [
            {},
            { top: '0px', left: '0px', width: '320px', height: '190px' },
            { top: '0px', left: '330px', width: '320px', height: '190px' },
            { top: '200px', left: '0px', width: '320px', height: '190px' },
            { top: '200px', left: '330px', width: '320px', height: '190px' },
            { top: '400px', left: '0px', width: '320px', height: '190px' },
            { top: '400px', left: '330px', width: '320px', height: '190px' },
            { top: '0px', left: '660px', width: '980px', height: '590px' },
            { top: '600px', left: '0px', width: '815px', height: '280px' },
            { top: '600px', left: '825px', width: '815px', height: '280px' },
        ]

        var leftNotePostion = [
            {},
            { top: '0px', left: '0px', width: '980px', height: '590px' },
            { top: '0px', left: '990px', width: '320px', height: '190px' },
            { top: '0px', left: '1320px', width: '320px', height: '190px' },
            { top: '200px', left: '990px', width: '320px', height: '190px' },
            { top: '200px', left: '1320px', width: '320px', height: '190px' },
            { top: '400px', left: '990px', width: '320px', height: '190px' },
            { top: '400px', left: '1320px', width: '320px', height: '190px' },
            { top: '600px', left: '0px', width: '815px', height: '280px' },
            { top: '600px', left: '825px', width: '815px', height: '280px' },
        ]

        var resetPosition1 = ResetPosition[1],
            resetPosition2 = ResetPosition[2],
            resetPosition3 = ResetPosition[3],
            resetPosition4 = ResetPosition[4],
            resetPosition5 = ResetPosition[5],
            resetPosition6 = ResetPosition[6],
            resetPosition7 = ResetPosition[7],
            resetPosition8 = ResetPosition[8],
            resetPosition9 = ResetPosition[9];

        var leftNotePostion1 = leftNotePostion[1],
            leftNotePostion2 = leftNotePostion[2],
            leftNotePostion3 = leftNotePostion[3],
            leftNotePostion4 = leftNotePostion[4],
            leftNotePostion5 = leftNotePostion[5],
            leftNotePostion6 = leftNotePostion[6],
            leftNotePostion7 = leftNotePostion[7],
            leftNotePostion8 = leftNotePostion[8],
            leftNotePostion9 = leftNotePostion[9];
            
        var NotePosition1 = NotePostion[1],
            NotePosition2 = NotePostion[2],
            NotePosition3 = NotePostion[3],
            NotePosition4 = NotePostion[4],
            NotePosition5 = NotePostion[5],
            NotePosition6 = NotePostion[6],
            NotePosition7 = NotePostion[7],
            NotePosition8 = NotePostion[8],
            NotePosition9 = NotePostion[9];

        function resetPosionFun() {
            $('.relative-1 > div').each(function (index, item) {

                $(item).css(ResetPosition[index + 1])

            })

        }

        function resetNotePosionFun() {
            $('.relative-1 > div').each(function (index, item) {

                $(item).css(NotePostion[index + 1])
            })
        }


         function resetLeftNotePosionFun() {
            $('.relative-1 > div').each(function (index, item) {

                $(item).css(leftNotePostion[index + 1])
            })
        }




        $('#div1').click(function () {
            resetLeftNotePosionFun();
            $(this).animate(leftNotePostion1);
            $('#div1').animate(leftNotePostion1);
        })

        $('#div2').click(function () {
            resetLeftNotePosionFun();
            $(this).animate(leftNotePostion1);
            $('#div1').animate(leftNotePostion2);

        })

        $('#div3').click(function () {
            resetLeftNotePosionFun();
            $(this).animate(leftNotePostion1);
            $('#div1').animate(leftNotePostion3);

        })

        $('#div4').click(function () {
            resetNotePosionFun();
            $(this).animate(NotePosition7);
            $('#div7').animate(NotePosition4);

        })

        $('#div5').click(function () {
            resetNotePosionFun();
            $(this).animate(NotePosition7);
            $('#div7').animate(NotePosition5);

        })

        $('#div6').click(function () {
            resetNotePosionFun();
            $(this).animate(NotePosition7);
            $('#div7').animate(NotePosition6);

        })

        $('#div7').click(function () {
            resetNotePosionFun();
            $(this).animate(NotePosition7);
            $('#div7').animate(NotePosition7);
            $(this.reset).css({ display: 'block' })
        })

        $('#div8').click(function () {
            resetNotePosionFun();
            $(this).animate(NotePosition7);
            $('#div7').animate(NotePosition8);

        })

        $('#div9').click(function () {
            resetNotePosionFun();
            $(this).animate(NotePosition7);
            $('#div7').animate(NotePosition9);

        })

        $('.reset').click(function () {
            window.event ? window.event.cancelBubble = true : e.stopPropagation();
            resetPosionFun();
        })

    }
    render() {
        return (
            <div style={{height:"100%"}}>
                <div className="relativeWrap" >
                        <div id="#div1" className="">1</div>
                        <div id="#div2" className="">2</div>
                        <div id="#div3" className="">3</div>
                        <div id="#div4" className="">4</div>
                        <div id="#div5" className="">5</div>
                        <div id="#div6" className="">6</div>
                        <div id="#div7" className="">7</div>
                        <div id="#div8" className="">8</div>
                        <div id="#div9" className="">9</div>
                </div>
            </div>
        );
    }
}

Col.propTypes = {

};

export default Col;