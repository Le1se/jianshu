import React, { Component} from 'react';
import {DetailWrapper, Header, Content} from './style';
class Detail extends Component {
    render(){
        return (
            <DetailWrapper>
                <Header>
                    品评: 红楼梦人物375
                </Header>
                <Content>
                正因为邢夫人是填房，她的一切行为便都好解释，她在家是老大，后来又把所有的家私攥在自己手里，想必自小便是厉害人物，如《金锁记》里的曹七巧。如果嫁了一般人，能够爱惜她，体谅她，未必不是一段好姻缘，偏偏攀上了大富之家，婆婆、妯娌全出身豪门，再怎么试着平等待她，都会露出大家闺秀的优越感来。
                而她老公也不给她面子，林黛玉初进荣国府，邢夫人兴致勃勃地带她去见贾赦，贾赦找个借口见都不见，一方面是懒得敷衍这位外甥女，一方面对他夫人的提议没有丝毫尊重。
                小细节上倒也罢了，贾赦还左一个小老婆右一个小老婆收在房中，甚至要邢夫人去说媒。这样的事发生在王夫人身上该有多么不可思议，看贾政与夫人的几次谈话，虽然不显情意，却平等有加，与对赵姨娘的口气全然不是一回事。

                </Content>
            </DetailWrapper>
        )
    }
}

export default Detail;