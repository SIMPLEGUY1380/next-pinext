'use client'

import { useState } from "react"

import Input from "./Input"
import Questions from "./Questions"
import Chat from "./Chat"

export type QuestionType = {
    id: number,
    text: string,
    answer: string;
}

function Screen() {
    const [qNow, setQNow] = useState<null | number>(null)
    
    const [waitingQueue, setWaitingQueue] = useState<0 | 1>(0);

    const questionList: QuestionType[] = [
        {id: 1, text: `چطور پنل ها رو مشاهده کنم`, answer: 'در بخش ارتباط با ما به اینستاگرام مراجعه کنید'},
        {id: 2, text: `چطور قیمت ها رو مشاهده کنم`, answer: 'در بخش ارتباط با ما به اینستاگرام مراجعه کنید'},
        {id: 3, text: `چطور پشتیبانی رو پیدا کنم`, answer: 'در بخش ارتباط با ما به اینستاگرام مراجعه کنید'},
        {id: 4, text: `چطور پشتیبانی رو پیدا کنم`, answer: 'در بخش ارتباط با ما به اینستاگرام مراجعه کنید'},
        {id: 5, text: `چطور پشتیبانی رو پیدا کنم`, answer: 'در بخش ارتباط با ما به اینستاگرام مراجعه ارتباط با ما به اینستاگرام مراجعه ارتباط با ما به اینستاگرام مراجعه ارتباط با ما به اینستاگرام مراجعه ارتباط با ما به اینستاگرام مراجعه ارتباط با ما به اینستاگرام مراجعه ارتباط با ما به اینستاگرام مراجعه ارتباط با ما به اینستاگرام مراجعه ارتباط با ما به اینستاگرام مراجعه کنید'},
    ]

    function onQuestionFire(qId: number) {
        setQNow(qId)
    }
    return (
        <div className="p-0 lg:p-3  h-full bg-primary-200 flex gap-4">
            <div className="w-full flex flex-col justify-between">
                <Chat question={qNow} questionList={questionList} setWaitingQueue={setWaitingQueue} />
                <Questions onQuestion={onQuestionFire} questionList={questionList} waitingQueue={waitingQueue} />
                {/* <Input /> */}
            </div>
        </div>
    )
}


export default Screen
