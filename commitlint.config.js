module.exports = {
  extends: ['@commitlint/config-conventional'],  // Conventional Commits 규칙 사용
  rules: {
    'type-enum': [
      2,  // 규칙을 '에러'로 설정하여 잘못된 타입 사용 시 에러 발생
      'always',  // 항상 아래 타입들만 허용
      [
        'feat',        // 새로운 기능 추가
        'fix',         // 버그 수정
        'docs',        // 문서 수정
        'design',      // 디자인 변경 (UI/UX 변경)
        'refactor',    // 리팩토링 (기능 변화 없음)
        'test',        // 테스트 코드 추가
        'chore',       // 유지보수 작업
        'build',       // 빌드 관련 코드 수정
        'ci',          // CI 관련 설정
        'perf',        // 성능 개선
        'revert',      // 이전 커밋 되돌리기
        'hotfix',      // 긴급 버그 수정
        'init',        // 프로젝트 초기 설정 작업
        'comment',     // 주석 추가 또는 수정
        'deps',        // 의존성 추가, 삭제, 업데이트
        'remove',      // 파일/폴더 삭제
      ],
    ],
  },
};
