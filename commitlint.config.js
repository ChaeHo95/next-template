module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2, // 규칙을 'error'로 처리
      'always',
      [
        'feat',        // 새로운 기능 추가
        'fix',         // 버그 수정
        'docs',        // 문서 수정
        'style',       // 코드 스타일 변경 (세미콜론 등)
        'refactor',    // 리팩토링 (기능 변화 없음)
        'test',        // 테스트 코드 추가
        'chore',       // 빌드 또는 패키지 매니저 설정
        'build',       // 빌드 관련 코드 수정
        'ci',          // CI 관련 설정
        'perf',        // 성능 개선
        'revert',      // 이전 커밋 되돌리기
        'hotfix',      // 긴급 버그 수정
      ],
    ],
  },
};
