import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import BasicInfo from './BasicInfo';
import TextareaContainer from './TextareaContainer';
import Buttons from './Buttons';
import { BoardContainer, BoardTitle, BoardText } from './ApplicationStyles';
import { Application } from './ApplicationProps';

const Board: React.FC = () => {
  const [user, setUser] = useState({
    name: '김명지',
    studentId: '60230000',
    major: '응용소프트웨어학과',
    phone: '01012341234'
  });

  // useEffect(() => {
  // user테이블에서 받기
  //   axios
  //     .get('/api/user', {
  //       params: {
  //         id: userId
  //       }
  //     })
  //     .then((response) => {
  //       setUser(response.data);
  //     });
  // }, []);

  const [recruitment, setRecruitment] = useState({
    applicationField: ['사과🍎', '수박🍉', '포도🍇', '딸기🍓', '복숭아🍑'],
    questions: [
      '1. 지원동기를 작성해주세요.',
      '2. 좋아하는 과일을 말씀해주세요'
    ]
  });

  // useEffect(() => {
  // recruitment테이블에서 받기
  //     axios
  //       .get('/api/recruitment')
  //       .then((response) => {
  //         setRecruitment(response.data);
  //       })
  //       .catch((error) => {
  //         console.error('에러 발생:', error);
  //       });
  //   }, []);

  const [questions, setQuestions] = useState<Array<string>>([]);

  useEffect(() => {
    setQuestions([...recruitment.questions]);
  }, []);

  const [application, setApplication] = useState<Application>({
    answer: [],
    supportField: '사과🍎',
    grade: '1',
    isAttending: true,
    isSubmit: false
  });

  // useEffect(() => {
  // application테이블에서 받기
  //   axios
  //     .get('/api/application', {
  //       params: {
  //         id: applicationId
  //       }
  //     })
  //     .then((response) => {
  //       setApplication(response.data);
  //     });
  // }, []);

  const [answer, setAnswer] = useState<Array<string>>([]);
  const [supportField, setSupportField] = useState<string>('사과🍎');
  const [isAttending, setIsAttending] = useState<boolean>(true);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const save = () => {
    const updatedApplication = { ...application };
    updatedApplication.isSubmit = false;
    setApplication(updatedApplication);

    // const dataToSave = {
    //   application: application,
    // };
    // axios
    //   .post('/api/Application', dataToSave)
    //   .then((response) => {
    //     console.log('서버 응답:', response.data);
    //   })
    //   .catch((error) => {
    //     console.error('에러 발생:', error);
    //   });

    console.log(answer);
  };

  const submit = () => {
    const updatedApplication = { ...application };
    updatedApplication.isSubmit = true;
    setApplication(updatedApplication);

    // const dataToSubmit = {
    //   application: application,
    // };
    // axios
    //   .post('/api/Application', dataToSubmit)
    //   .then((response) =>
    //     console.log('서버 응답:', response.data);
    //   })
    //   .catch((error) => {
    //     console.error('에러 발생:', error);
    //   });
  };

  return (
    <BoardContainer>
      <BoardTitle>기본 등록 정보</BoardTitle>
      <BoardText>
        해당 정보는 지원서 작성 완료 시 자동으로 전달됩니다.
      </BoardText>
      <BasicInfo
        user={user}
        setUser={setUser}
        application={application}
        setApplication={setApplication}
        supportField={supportField}
        setSupportField={setSupportField}
        isAttending={isAttending}
        setIsAttending={setIsAttending}
        isSubmit={isSubmit}
        setIsSubmit={setIsSubmit}
        recruitment={recruitment}
      />
      <TextareaContainer
        questions={questions}
        setQuestions={setQuestions}
        answer={answer}
        setAnswer={setAnswer}
      />
      <Buttons save={save} submit={submit} />
    </BoardContainer>
  );
};

export default Board;
