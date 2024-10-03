## 프로젝트 소개

이 프로젝트는 **Next.js** 프레임워크를 기반으로 하며, **TypeScript**와 **App Router**를 사용하여 현대적인 웹 애플리케이션을 개발하는 데 중점을 두고 있습니다.

---
## 프로젝트 적용 라이브러리

이 프로젝트는 코드 품질을 유지하고 개발 효율성을 높이기 위해 다음의 라이브러리를 사용합니다.

### 1. Prettier
- **용도**: 코드 포맷팅 도구로, 일관된 코드 스타일을 유지하는 데 사용됩니다.
- **설명**: Prettier는 코드 스타일을 자동으로 형식화하여, 팀원 간의 코드 스타일 불일치를 줄여줍니다. 설정 파일을 통해 다양한 포맷팅 옵션을 조정할 수 있으며, 사용자가 작성한 코드의 가독성을 높이는 데 기여합니다.

### 2. ESLint
- **용도**: JavaScript 및 TypeScript 코드의 품질을 검사하고 오류를 예방하는 정적 분석 도구입니다.
- **설명**: ESLint는 코드에서 잠재적인 오류를 식별하고, 일관된 스타일을 유지하기 위해 규칙을 적용합니다. 커스터마이즈 가능한 규칙 세트를 제공하며, 다양한 플러그인을 통해 기능을 확장할 수 있습니다.

### 3. Husky
- **용도**: Git hooks을 쉽게 설정할 수 있는 도구입니다.
- **설명**: Husky는 커밋, 푸시 등 Git 작업 시 특정 스크립트를 자동으로 실행할 수 있게 도와줍니다. 이를 통해 코드 품질 검사를 자동화하거나 중요한 작업을 수행할 수 있습니다.

### 4. Lint-staged
- **용도**: Git에 스테이징된 파일에 대해서만 lint 작업을 실행하는 도구입니다.
- **설명**: Lint-staged는 커밋할 파일을 대상으로 lint를 실행하여, 변경된 코드에 대해서만 검사합니다. 이를 통해 불필요한 검사 시간을 줄이고, 코드 품질을 더욱 효율적으로 관리할 수 있습니다.

### 5. Tailwind CSS
- **용도**: 유틸리티-퍼스트 CSS 프레임워크로, 빠르고 유연한 스타일링을 지원합니다.
- **설명**: Tailwind CSS는 사전 정의된 CSS 클래스를 사용하여 빠르게 UI를 구성할 수 있게 해줍니다. 이 접근 방식은 스타일을 재사용하고, 클래스 조합을 통해 독창적인 디자인을 쉽게 만들어냅니다.

이 라이브러리들은 코드 품질 및 스타일을 유지하고, 효율적인 개발 환경을 조성하는 데 중요한 역할을 합니다.

---

## 프로젝트 실행 방법

### 1. 의존성 설치

프로젝트를 클론한 후, 다음 명령어를 사용하여 의존성을 설치합니다:

```bash
npm install
```

- 이 명령어는 `package.json`에 정의된 모든 패키지를 설치합니다.
- 설치된 패키지는 `node_modules` 디렉토리에 저장됩니다.

### 2. 환경 변수 설정

Next.js 프로젝트에서는 환경 변수를 설정하기 위해 프로젝트 루트 디렉토리에 **`.env.local`** 파일을 생성하고 환경 변수를 정의할 수 있습니다.

#### 예시: `.env.local`

```bash
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
```

- **`NEXT_PUBLIC_` 접두사**: 이 접두사가 붙은 환경 변수는 **클라이언트 측**에서 사용될 수 있습니다.
- `.env.local` 파일은 **로컬 환경에서만** 적용되며, Git에 커밋되지 않으므로 보안상의 이유로 민감한 정보를 안전하게 관리할 수 있습니다.

### 3. 개발 서버 실행

의존성 설치 후, 아래 명령어로 개발 서버를 실행합니다:

```bash
npm run dev
```

- **`npm run dev`**: 이 명령어는 개발 모드에서 Next.js 서버를 실행합니다.
- 개발 서버가 실행된 후 **http://localhost:3000**에서 애플리케이션을 확인할 수 있습니다.
- **핫 리로드(Hot Reload)**: 코드가 변경될 때마다 페이지가 자동으로 리로드됩니다.

### 4. 프로덕션 빌드

프로덕션용으로 빌드하려면 다음 명령어를 사용합니다:

```bash
npm run build
```

- **`npm run build`**: 프로젝트를 최적화된 상태로 빌드합니다.
- 빌드된 파일들은 **`.next`** 폴더에 저장됩니다.

### 5. 프로덕션 서버 실행

빌드 후 프로덕션 환경에서 서버를 실행하려면:

```bash
npm run start
```

- **`npm run start`**: 빌드된 프로젝트를 프로덕션 모드에서 실행합니다.
- 이 명령어는 빌드된 **`.next`** 파일을 활용하여 최적화된 상태로 서버를 시작합니다.

---

## 환경 변수 파일

Next.js에서는 다양한 환경에 맞춰 **환경 변수 파일**을 사용할 수 있습니다. 환경 변수는 `process.env` 객체를 통해 접근할 수 있으며, 프로젝트 전반에서 중요한 값들을 관리합니다.

아래 파일들을 통해 로컬, 개발, 프로덕션 환경에 맞는 환경 변수를 설정할 수 있습니다:

- **`.env`**: 모든 환경에서 공통으로 사용하는 환경 변수 파일입니다.
- **`.env.local`**: 로컬 개발 환경에서만 사용하는 환경 변수 파일입니다. 이 파일은 **Git에 커밋되지 않으며**, 주로 로컬에서만 필요한 설정을 저장합니다.
- **`.env.development`**: 개발 환경에 맞는 환경 변수 파일로, 개발 환경에서만 로드됩니다.
- **`.env.production`**: 프로덕션 환경에 맞는 환경 변수 파일입니다. 실제 서버 배포 시 사용됩니다.

> **중요**: **`NEXT_PUBLIC_`** 접두사가 붙은 환경 변수만 클라이언트 측에서 접근할 수 있습니다. 민감한 정보는 반드시 접두사 없이 사용하여 **서버에서만 접근**하도록 설정해야 합니다.

### 환경 변수 파일 예시

#### `.env.local` 파일 예시:

```bash
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
```

- **`API_BASE_URL`**: 클라이언트 측에서 API 호출 시 사용할 기본 URL입니다.
- **`API_SECRET_KEY`**: 서버에서만 접근 가능한 비밀 키입니다. 클라이언트 측에서는 접근할 수 없습니다.

### 환경 변수 로드 순서

Next.js는 환경 변수를 아래 순서대로 로드합니다:

1. `.env.local`
2. `.env.[environment]` (예: `.env.development` 또는 `.env.production`)
3. `.env`

### 요약

- **환경 변수 설정**: `.env.local` 파일을 사용하여 로컬 환경에 맞는 변수 설정.
- **`NEXT_PUBLIC_` 접두사**: 클라이언트 측에서 사용될 환경 변수는 반드시 `NEXT_PUBLIC_` 접두사를 사용해야 합니다.
- **환경 파일**: `.env`, `.env.local`, `.env.development`, `.env.production` 파일을 통해 다양한 환경에 맞는 변수를 설정할 수 있습니다.

---

## 프로젝트 폴더 구조

이 프로젝트는 **Next.js TypeScript App Router** 기반으로 개발되었으며, 유지보수 및 확장성을 고려한 폴더 구조를 따릅니다.

각 폴더는 역할에 따라 나뉘어 있으며, 공통적으로 사용하는 요소는 `common` 폴더에, 각 페이지별로 독립적으로 사용하는 요소는 별도의 폴더로 관리하는 컨벤션을 따릅니다.

### 폴더 구조

```
├── app
│    ├── layout.tsx
│    └── page.tsx
├── assets
│    ├── fonts
│    │    └── index.ts
│    ├── icons
│    │    └── index.ts
│    ├── images
│    │    └── index.ts
│    └── styles
│        ├── index.css
│        └── tailwind.css
├── components
│    └── common
│        └── index.ts
├── constants
│    └── common
│        └── httpStatus.ts
├── hooks
│    └── common
│        ├── useDebounce.ts
│        └── useThrottle.ts
├── pages
│    └── index.ts
├── serviece
│    └── common
│        └── index.ts
├── store
│    └── common
│        └── index.ts
├── types
│    └── common
│        ├── debounce.type.ts
│        └── throttle.type.ts
└── utils
    └── common
        ├── api.ts
        ├── debounce.ts
        ├── error.ts
        └── throttle.ts

```

### 폴더 설명

### `app/`

- **Next.js 13+의 App Router**에서 사용하는 폴더로, 라우팅과 레이아웃 관리를 위한 파일이 포함됩니다.
  - **`layout.tsx`**: 모든 페이지에 공통적으로 적용되는 레이아웃을 정의하는 파일입니다.
  - **`page.tsx`**: 각 경로에 대응하는 기본 페이지 컴포넌트를 호출하는 파일입니다.

### `assets/`

- **정적 파일**을 관리하는 폴더입니다. 여기에는 이미지, 폰트, 아이콘, 스타일 파일 등이 포함됩니다.
  - **`fonts/`**: 프로젝트에서 사용하는 폰트 파일을 저장합니다.
  - **`icons/`**: SVG 및 PNG 형식의 아이콘 파일을 관리합니다.
  - **`images/`**: 프로젝트 내에서 사용되는 이미지 파일을 저장합니다.
  - **`styles/`**: 전역 스타일 파일을 관리하며, TailwindCSS와 같은 유틸리티 스타일 파일이 포함됩니다.

### `components/`

- **재사용 가능한 UI 컴포넌트**를 관리하는 폴더입니다.
  - **`common/`**: 여러 페이지에서 재사용 가능한 공통 컴포넌트를 저장합니다. 특정 페이지에서만 사용하는 컴포넌트는 각 페이지 폴더에서 독립적으로 관리합니다.

### `constants/`

- **상수 값**을 관리하는 폴더입니다.
  - **`common/`**: 프로젝트 전반에서 자주 사용되는 공통 상수 값(예: HTTP 상태 코드 등)을 저장합니다.

### `hooks/`

- **커스텀 React 훅**을 관리하는 폴더입니다.
  - **`common/`**: 여러 페이지에서 재사용할 수 있는 커스텀 훅
    - 예: `useDebounce.ts`, `useThrottle.ts`을 저장합니다.

### `pages/`

- App Router에서 사용되는 시스템 파일인 `page.tsx`에서 **임포트할 페이지 컴포넌트들을 모아 놓는 곳**입니다.
- 페이지 폴더는 App Router에서 각 경로와 연결되는 **페이지 컴포넌트**를 관리하며, 해당 컴포넌트를 **import**하여 사용합니다.

### `service/`

- **API 호출** 및 **비즈니스 로직**을 관리하는 폴더입니다.
  - **`common/`**: 공통으로 사용하는 API 호출 및 비즈니스 로직을 관리합니다.

### `store/`

- **전역 상태 관리**를 위한 폴더입니다.
  - **`common/`**: Zustand 또는 Redux와 같은 전역 상태 관리 라이브러리를 위한 공통 상태 관리 로직을 저장합니다.

### `types/`

- **TypeScript 타입 정의**를 관리하는 폴더입니다.
  - **`common/`**: 여러 페이지에서 공통으로 사용되는 TypeScript 타입
    - 예: `debounce.type.ts`, `throttle.type.ts`을 저장합니다.

### `utils/`

- **유틸리티 함수** 및 **공통 로직**을 관리하는 폴더입니다.
  - **`common/`**: 여러 페이지에서 재사용할 수 있는 공통 유틸리티 함수
    - 예: `api.ts`, `debounce.ts`, `*throttle*.ts`, `error.ts`를 저장합니다.

### 요약

- **공통 폴더 관리**: `common` 폴더에 여러 페이지에서 공통으로 사용하는 컴포넌트, 훅, 상수, 유틸리티 등을 저장합니다.
- **독립적인 구조**: 페이지별로 사용되는 요소들은 각 페이지 폴더에 독립적으로 저장하여 관리합니다.

---
## 경로 별칭 (Path Alias)

경로 별칭은 코드베이스에서 파일 및 디렉터리 구조에 접근할 때 사용되는 **상대 경로**의 복잡함을 줄이고 **모듈**을 쉽게 참조할 수 있도록 도와줍니다.

Next.js 또는 TypeScript 환경에서 **경로 별칭**을 설정함으로써 더 간결하고 직관적인 코드 작성을 할 수 있습니다.

### 별칭의 시작을 `@dev`로 설정한 이유

`@dev`로 시작하는 이유는 **내장 모듈**이나 **라이브러리**와 경로가 충돌하지 않도록 하기 위해서입니다. 

많은 라이브러리나 내장 모듈에서 사용하는 경로나 이름과 겹치는 문제를 방지하기 위해, 프로젝트에서 사용하는 경로 별칭의 고유성을 보장하는 것이 중요합니다.

예를 들어, 일반적으로 `@components`, `@utils`와 같은 경로 별칭은 널리 사용되기 때문에, 이를 `@devComponents`, `@devUtils`와 같은 방식으로 고유하게 설정하여 충돌 가능성을 줄일 수 있습니다.

### `tsconfig.json` 경로 별칭 설정

아래는 `tsconfig.json`에서 **경로 별칭**을 설정한 예시입니다. 이 설정은 프로젝트에서 각 디렉터리를 간단한 별칭으로 참조할 수 있도록 도와줍니다.

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@dev/*": [
        "./src/*"
      ],
      "@devAssets/*": [
        "./src/assets/*"
      ],
      "@devTypes/*": [
        "./src/types/*"
      ],
      "@devUtils/*": [
        "./src/utils/*"
      ],
      "@devConstants/*": [
        "./src/constants/*"
      ],
      "@devComponents/*": [
        "./src/components/*"
      ],
      "@devHooks/*": [
        "./src/hooks/*"
      ],
      "@devPages/*": [
        "./src/pages/*"
      ],
      "@devServices/*": [
        "./src/services/*"
      ],
      "@devStore/*": [
        "./src/store/*"
      ]
    }
  }
}
```

### 설정한 별칭 설명

- **`@dev/*`**: 기본적으로 `src` 폴더 내 모든 파일에 대한 별칭입니다.
- **`@devAssets/*`**: `src/assets` 폴더의 정적 파일(이미지, 폰트, 스타일 등)에 접근할 때 사용합니다.
- **`@devTypes/*`**: `src/types` 폴더에 정의된 TypeScript 타입에 접근할 때 사용됩니다.
- **`@devUtils/*`**: 공통 유틸리티 함수나 도구 모음이 있는 `src/utils` 폴더에 대한 별칭입니다.
- **`@devConstants/*`**: 상수 값들이 정의된 `src/constants` 폴더에 대한 별칭입니다.
- **`@devComponents/*`**: 공통으로 사용하는 컴포넌트가 위치한 `src/components` 폴더의 별칭입니다.
- **`@devHooks/*`**: 커스텀 훅을 저장한 `src/hooks` 폴더에 대한 별칭입니다.
- **`@devPages/*`**: 페이지 관련 파일들이 저장된 `src/pages` 폴더에 접근할 때 사용합니다.
- **`@devServices/*`**: 서비스 로직이나 API 호출을 다루는 `src/services` 폴더를 참조합니다.
- **`@devStore/*`**: 전역 상태 관리 로직이 있는 `src/store` 폴더에 대한 별칭입니다.

### 경로 별칭의 장점

- **가독성**: 여러 단계의 상대 경로(`../../components`) 대신 간결한 별칭(`@devComponents`)을 사용할 수 있어 코드의 가독성을 높입니다.
- **유지보수성**: 폴더 구조가 변경되더라도, 경로 별칭을 사용하면 각 파일에서 상대 경로를 일일이 수정할 필요 없이 `tsconfig.json`의 경로만 수정하면 됩니다.
- **충돌 방지**: `@dev`로 시작하는 별칭을 사용하면, 외부 라이브러리나 패키지와의 충돌을 피할 수 있습니다.

### 요약

- 경로 별칭은 코드의 **가독성**과 **유지보수성**을 크게 개선합니다.
- **`@dev`**로 시작하는 별칭은 다른 라이브러리와의 경로 충돌을 방지하는 데 도움을 줍니다.
- **tsconfig.json**에서 `paths` 속성을 통해 여러 폴더에 대해 간편하게 경로 별칭을 설정할 수 있습니다.

---

## 코드 스타일 및 규칙

이 프로젝트는 **Next.js TypeScript App Router** 기반으로 개발되었으며, 코드의 일관성을 유지하고 가독성을 높이기 위해 **Prettier**, **ESLint**, **Commitlint**를 사용하여 코딩 스타일과 커밋 메시지 규칙을 관리합니다.

### Prettier

**Prettier**는 코드 포맷팅을 자동으로 관리하는 도구입니다. 이 프로젝트에서는 아래와 같은 설정을 적용하여 코드 스타일을 유지합니다:

#### Prettier 설정

```json5
{
  "printWidth": 80,
  // 한 줄에 80자를 넘기지 않도록 설정
  "tabWidth": 4,
  // 탭 간격을 4칸으로 설정
  "useTabs": false,
  // 탭 대신 스페이스를 사용
  "singleQuote": true,
  // 문자열에 작은따옴표(') 사용
  "trailingComma": "es5",
  // ES5에서 유효한 곳에만 후행 쉼표 사용
  "semi": true,
  // 명령문 끝에 세미콜론(;) 추가
  "bracketSpacing": true,
  // 중괄호 내부에 공백 추가
  "jsxBracketSameLine": false,
  // JSX에서 닫는 괄호를 새 줄에 배치
  "arrowParens": "always"
  // 화살표 함수 매개변수에 괄호 항상 사용
}
```

#### Prettier 적용 방법

- **자동 포맷팅**: 파일을 저장할 때 Prettier가 자동으로 실행됩니다. IDE/에디터에서 관련 플러그인을 설치하여 저장 시 자동 포맷팅 기능을 활성화할 수 있습니다.
- **명령어로 실행**: 수동으로 Prettier를 실행할 수 있습니다.

  ```bash
  npx prettier --write .
  ```

### ESLint

**ESLint**는 코드 품질을 유지하기 위한 정적 분석 도구입니다. 이 프로젝트에서는 TypeScript와 Prettier를 통합하여 코드 스타일과 오류를 관리합니다.

#### ESLint 설정

```json5
{
  "rules": {
    "prettier/prettier": "error",
    // Prettier 규칙을 ESLint에서 에러로 처리
    "react/react-in-jsx-scope": "off",
    // React 17 이상에서는 불필요
    "no-var": "error",
    // var 사용 금지
    "eqeqeq": "error",
    // ===를 사용한 동등 비교 강제
    "no-multiple-empty-lines": "error",
    // 여러 줄의 공백 금지
    "no-console": [
      "error",
      {
        "allow": [
          "warn",
          "error",
          "info"
          // console.log() 금지, warn, error, info는 허용
        ]
      }
    ],
    "no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "^_",
        // '_'로 시작하는 변수는 검사에서 제외
        "argsIgnorePattern": "^_"
        // '_'로 시작하는 인수도 검사에서 제외
      }
    ],
    "react-hooks/exhaustive-deps": "off"
    // react-hooks 의존성 경고 비활성화
  }
}
```

#### ESLint 적용 방법

- **자동 ESLint 검사**: 파일을 저장할 때 ESLint가 자동으로 실행되도록 설정할 수 있습니다.
- **명령어로 실행**: 수동으로 ESLint를 실행할 수 있습니다.

  ```bash
  npx eslint .
  ```

### Commitlint

**Commitlint**는 커밋 메시지가 규칙에 맞는지 검사하여 일관된 커밋 메시지를 작성하도록 강제하는 도구입니다. 이 프로젝트에서는 **Conventional Commit** 형식을 따릅니다.

#### 커밋 메시지 형식

```
<타입>: <변경 사항 설명>

예시:
feat: 새로운 로그인 기능 추가
fix: 사용자 인증 오류 수정
```

### 각 타입 설명:
- **feat**: 새로운 기능을 추가할 때 사용됩니다.
- **fix**: 버그를 수정할 때 사용됩니다.
- **docs**: 문서 수정 및 업데이트 작업에 사용됩니다. (예: README.md)
- **design**: UI/UX 디자인 관련 작업에 사용됩니다.
- **refactor**: 코드 구조를 개선할 때 사용되며, 기능 변화는 없습니다.
- **test**: 테스트 코드 작성 및 수정에 사용됩니다.
- **chore**: 유지보수 작업, 빌드 설정 또는 패키지 매니저 관련 작업에 사용됩니다.
- **build**: 빌드 시스템, 설정 파일 수정에 사용됩니다.
- **ci**: CI 설정 관련 수정 작업에 사용됩니다. (예: GitHub Actions 등)
- **perf**: 성능 개선을 위한 코드 수정에 사용됩니다.
- **revert**: 이전 커밋을 되돌릴 때 사용됩니다.
- **hotfix**: 긴급하게 버그를 수정해야 할 때 사용됩니다.
- **init**: 프로젝트 초기 설정 작업에 사용됩니다.
- **deps**: 의존성을 추가, 삭제, 업데이트할 때 사용됩니다.
- **remove**: 파일 또는 폴더를 삭제할 때 사용됩니다.

이 설정은 **Conventional Commits** 규칙을 기반으로 하여, 커밋 메시지를 명확하고 일관되게 관리할 수 있도록 도와줍니다.

### 요약

1. **Prettier**: 코드 스타일 일관성을 유지하기 위한 자동 포맷팅 도구.
2. **ESLint**: 코드 품질과 스타일을 유지하기 위한 정적 분석 도구. Prettier와 통합하여 사용.
3. **Commitlint**: 커밋 메시지가 규칙에 맞는지 검사하여 일관된 형식의 커밋 메시지를 작성하도록 강제합니다.

---
## API 유틸리티 사용 방법

해당 파일은 **통신 유틸리티 모듈**로, API와의 통신을 쉽고 효율적으로 처리하기 위해 설계되었습니다.

특히 **자동 스로틀링 기능**과 **에러 처리**가 포함되어 있어 네트워크 요청을 안전하게 관리할 수 있습니다.

### 주요 기능
- **자동 스로틀링**: 동일한 요청이 짧은 시간 내에 반복될 경우, 기본적으로 500ms 간격으로 제한하여 서버 부하를 방지합니다.
- **에러 처리**: 요청 실패 시, `'THROTTLED-ERROR'` 및 `'REQUEST-ERROR'`와 같은 에러 코드를 통해 상세한 에러 정보를 제공합니다.
- **다양한 HTTP 메서드 지원**: `get`, `post`, `put`, `delete` 메서드를 통해 다양한 API 요청을 쉽게 처리할 수 있습니다.

### 1. **GET 요청 사용 예시**
```typescript
import api from '@devUtils/common/api';

const fetchData = async () => {
    try {
        const response = await api.get('/users');  // GET 요청
        console.log(response.data);  // 성공적인 응답 데이터 출력
    } catch (error) {
        if (error.code === 'THROTTLED-ERROR') {
            console.error('요청이 너무 자주 발생하여 스로틀링이 적용되었습니다.');
        } else {
            console.error('다른 오류 발생:', error.message);
        }
    }
};
```

### 2. **POST 요청 사용 예시**
```typescript
const postData = async () => {
    try {
        const response = await api.post('/users', { name: 'John Doe' });  // POST 요청
        console.log(response.data);  // 응답 데이터 출력
    } catch (error) {
        console.error('에러 발생:', error);
    }
};
```

### 3. **PUT 요청 사용 예시**
```typescript
const updateData = async () => {
    try {
        const response = await api.put('/users/1', { name: 'Jane Doe' });  // PUT 요청
        console.log(response.data);  // 성공적인 응답 출력
    } catch (error) {
        console.error('에러 발생:', error);
    }
};
```

### 4. **DELETE 요청 사용 예시**
```typescript
const deleteData = async () => {
    try {
        const response = await api.delete('/users/1');  // DELETE 요청
        console.log(response.data);  // 성공적인 응답 출력
    } catch (error) {
        console.error('에러 발생:', error);
    }
};
```

#### 요약
- **자동 스로틀링 기능**으로 서버 부하를 최소화할 수 있으며, **에러 처리**를 통해 요청 실패 시 구체적인 피드백을 제공합니다.
- **다양한 HTTP 메서드**를 통해 여러 종류의 API 요청을 처리할 수 있습니다.
- 사용법은 매우 직관적이며, 다양한 네트워크 요청 시 활용 가능합니다.

---

## **useDebounce, debounce, useThrottle, throttle 사용 방법**

이 모듈들은 사용자 입력 또는 이벤트 처리를 효율적으로 제어하기 위해 설계되었습니다.

**useDebounce**와 **debounce**는 디바운싱을 제공하고, **useThrottle**와 **throttle**은 스로틀링 기능을 지원합니다.

**useDebounce**와 **useThrottle**은 React에서 **hooks** 형태로, **debounce**와 **throttle**은 어디서든 사용할 수 있는 **유틸리티 함수**로 제공됩니다.

### 주요 기능
- **Debounce**: 사용자가 빠르게 반복하는 이벤트나 입력을 일정 시간 동안 모아서 처리합니다. 이를 통해 서버로의 불필요한 요청을 줄이고 사용자 경험을 최적화합니다.
- **useDebounce**: **React 컴포넌트**에서의 상태 관리와 재렌더링을 고려한 debounce 처리.
- **Throttle**: 반복적인 이벤트나 함수 호출을 일정 시간 동안 제한하여 **일정한 간격**으로만 실행되도록 제어합니다.
- **useThrottle**: **React 컴포넌트**에서 상태 관리와 재렌더링을 고려한 throttle 처리.

#### **useDebounce 사용 예시**
```tsx
import { useState } from 'react';
import { useDebounce } from '@devHooks/common/useDebounce';

const SearchComponent = () => {
    const [value, setValue] = useState('');

    // 디바운스 처리된 함수
    const { event: debounceEvent } = useDebounce({
        fn: (input: string) => console.log('검색어:', input),
        wait: 1000 // 1초 대기 후 실행
    });

    return (
        <input
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
                debounceEvent(e.target.value); // 입력할 때마다 디바운스 호출
            }}
        />
    );
};
```

#### **debounce 사용 예시**
```typescript
import { debounce } from '@devUtils/common/debounce';

const searchData = debounce({
    fn: (input: string) => {
        console.log('검색어:', input);
    },
    wait: 1000 // 1초 대기 후 실행
});

// 이벤트 예시
window.addEventListener('scroll', () => searchData('스크롤 중...'));
```

#### **useThrottle 사용 예시**
```tsx
import { useThrottle } from '@devHooks/common/useThrottle';

const ThrottleComponent = () => {
    const { event: throttleEvent, state } = useThrottle({
        fn: () => console.log('클릭 처리'),
        wait: 1000 // 1초 간격으로만 실행
    });

    return (
        <button disabled={state} onClick={throttleEvent}>
            클릭 (1초 제한)
        </button>
    );
};
```

#### **throttle 사용 예시**
```typescript
import { throttle } from '@devUtils/common/throttle';

const throttleClick = throttle({
    fn: () => {
        console.log('버튼 클릭 처리');
    },
    wait: 1000 // 1초 간격으로만 실행
});

// 이벤트 예시
document.querySelector('button').addEventListener('click', throttleClick);
```

#### **Hooks와 Utils의 차이점**

- **useDebounce**와 **useThrottle**은 **React Hook**으로, **컴포넌트 재렌더링을 고려**하여 작성되었습니다. 상태 변화와 함께 함수가 재선언되거나 이벤트가 중복 호출되는 문제를 방지합니다.
- **debounce**와 **throttle**은 **유틸리티 함수**로, React 외부나 전역적으로 사용이 가능하지만, React 컴포넌트 내부에서는 렌더링마다 함수가 재선언될 수 있어 hooks 버전이 더 적합할 수 있습니다.

### 요약
- **useDebounce**와 **useThrottle**은 React 컴포넌트에서 사용하는 **Hooks**로, **상태 관리**와 **재렌더링**을 고려해 설계되었습니다.
- **debounce**와 **throttle**은 React 외부에서 사용할 수 있는 **유틸리티 함수**입니다.
- **Hooks** 버전은 React 컴포넌트에서 **상태 변화**를 관리하는 데 유용하며, **Utils** 버전은 전역 또는 비React 환경에서 활용할 수 있습니다.

---
