import React from "react"


import * as S from "./style"

const PostItem = () => (
    <S.PostItemLink to="/slug/">
        <S.PostItemWrapper>
            <S.PostItemTag background="#47650b">Misc</S.PostItemTag>
            <S.PostItemInfo>
                <S.PostItemDate> 26 de agosto de 2020  * 4 minutos de leitura</S.PostItemDate>
                <S.PostItemTitle>Primeiro post</S.PostItemTitle>
                <S.PostItemDescription>
                É com muita emoção que publico esse primeiro artigo.
                </S.PostItemDescription>

            </S.PostItemInfo>
        </S.PostItemWrapper>
    </S.PostItemLink>


)

export default PostItem