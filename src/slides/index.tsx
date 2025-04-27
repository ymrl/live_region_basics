import {
  Blockquote,
  Code,
  List,
  ListItem,
  Paragraph,
  Link,
  Note,
} from "../components/elements";
import { SlideBase } from "../components/SlideBase";
import WhatIsLiveRegion from "./WhatIsLiveRegion.mdx";
import Demo from "./Demo.mdx";
import AriaAtomic from "./AriaAtomic.mdx";
import Appear from "./Appear.mdx";
import DelayedAppear from "./DelayedAppear.mdx";
import ImplicitLiveRegions from "./ImplicitLiveRegions.mdx";
import { DemoWrapper, WhatTime } from "./demo/components";
import { LiveRegionDemo } from "./demo/LiveRegionDemo";
import { AssertiveDemo } from "./demo/AssertiveDemo";
import { AriaAtomicDemo } from "./demo/AriaAtomicDemo";
import { AriaRelevantDemo } from "./demo/AriaRelevantDemo";
import { AriaBusyDemo } from "./demo/AriaBusyDemo";
import { AppearDemo } from "./demo/AppearDemo";
import { PoliteClock } from "./demo/components/PoliteClock";

export const slides = [
  <SlideBase
    title={
      <span className="break-keep wrap-break-word">
        WAI-ARIA
        <wbr />
        ライブリージョン
        <wbr />の
        <wbr />
        基礎
      </span>
    }
    id="cover"
    level={1}
  >
    <p className="mt-4 text-lg">ymrl</p>

    <p className="mt-12 text-sm text-gray-700">
      このスライドは
      <kbd className="mx-1 text-slate-900 py-0.5 px-2 rounded-lg border-slate-400 border bg-slate-200">
        J
      </kbd>
      キーで次のスライドへ、
      <kbd className="mx-1 text-slate-900 py-0.5 px-2 rounded-lg  border-slate-400 border bg-slate-200">
        K
      </kbd>
      キーで前のスライドへ移動します。
      <br />
      スクロールでも移動できます。
    </p>
  </SlideBase>,
  <SlideBase title="自己紹介" id="profile">
    <List>
      <ListItem>ymrl （「やまある」と読みます）</ListItem>
      <ListItem>フリー株式会社 UIデザイナー・エンジニア</ListItem>
      <ListItem>「Webアプリケーションアクセシビリティ」共著者</ListItem>
    </List>
  </SlideBase>,
  <SlideBase title="ライブリージョンとは？" id="about-live-region">
    <WhatIsLiveRegion />
  </SlideBase>,
  <SlideBase title="ライブリージョンのデモ" id="demo">
    <DemoWrapper>
      <LiveRegionDemo />
    </DemoWrapper>
    <Demo />
  </SlideBase>,
  <SlideBase title="ライブリージョンとは何か" id="what-is-live-region">
    <p className="text-2xl mt-8">
      <span className="break-keep wrap-break-word">
        支援技術に
        <wbr />
        対して、
        <wbr />
        <strong>
          内容の
          <wbr />
          変化
        </strong>
        を
        <wbr />
        <strong>通知</strong>できる
        <wbr />
        要素
      </span>
    </p>
    <List>
      <ListItem>
        フォーカスやスクリーンリーダーのカーソルを動かさなくても、変化した場所が読み上げられる
      </ListItem>
      <ListItem>Webコンテンツ側から、画面内の変化をプッシュできる</ListItem>
    </List>
    <DemoWrapper>
      <LiveRegionDemo />
    </DemoWrapper>
  </SlideBase>,
  <SlideBase title="ライブリージョンが役に立つ場面" id="live-region-usage">
    <List>
      <ListItem>ユーザーの操作に対するフィードバックを伝える</ListItem>
      <ListItem>連続する作業のなかで、ユーザーに現在の状況を伝える</ListItem>
      <ListItem>
        ユーザーのコンテキスト外で起きていることを伝える（システム側や他ユーザーによるアクションなど）
      </ListItem>
    </List>
    <Paragraph>
      Next.jsでは、ページ遷移時に<Code>document.title</Code>や
      <Code>&lt;h1&gt;</Code>要素の内容をライブリージョンで伝えている（
      <Link href="https://nextjs.org/docs/architecture/accessibility#route-announcements">
        Route Announcement
      </Link>
      ）
    </Paragraph>
  </SlideBase>,
  <SlideBase
    title="ライブリージョンに関連するARIA属性"
    id="aria-live-attributes"
  >
    <List>
      <ListItem>
        <Code>aria-live</Code>: ライブリージョンを宣言する
      </ListItem>
      <ListItem>
        <Code>aria-atomic</Code>: 変更を通知する際に、全体を通知する
      </ListItem>
      <ListItem>
        <Code>aria-relevant</Code>: どんな変更を通知するか
      </ListItem>
      <ListItem>
        <Code>aria-busy</Code>: 要素が更新中であることを表す
      </ListItem>
    </List>
  </SlideBase>,
  <SlideBase title="aria-live" id="aria-live">
    <Paragraph>ライブリージョンを宣言する</Paragraph>
    <List>
      <ListItem>
        <Code>polite</Code>: 通知は割り込まず、後に回してもいい
      </ListItem>
      <ListItem>
        <Code>assertive</Code>: 他の操作に割り込んででも、すぐに通知してほしい
      </ListItem>
      <ListItem>
        <Code>off</Code>: 通知しない（デフォルト）
      </ListItem>
    </List>
    <Paragraph>
      macOS VoiceOverの場合は、 <Code>polite</Code>でも他の読み上げに割り込む。
      <Code>assertive</Code>
      は効果音を鳴らす
    </Paragraph>
    <DemoWrapper>
      <AssertiveDemo />
    </DemoWrapper>
  </SlideBase>,
  <SlideBase title="aria-atomic" id="aria-atomic">
    <Paragraph>変更を通知する際に、全体を通知するかどうか</Paragraph>
    <List>
      <ListItem>
        <Code>true</Code>:
        ライブリージョン要素全体を、リージョンのラベルも含めて通知する
      </ListItem>
      <ListItem>
        <Code>false</Code>: 変更された部分（要素）だけを通知する（デフォルト）
      </ListItem>
    </List>
    <DemoWrapper>
      <AriaAtomicDemo />
    </DemoWrapper>
    <AriaAtomic />
  </SlideBase>,

  <SlideBase title="aria-relevant" id="aria-relevant">
    <Paragraph>通知する変更の種類を指定する</Paragraph>
    <List>
      <ListItem>
        <Code>additions</Code>: 追加された要素を通知する
      </ListItem>
      <ListItem>
        <Code>text</Code>: テキストノードの変更を通知する
      </ListItem>
      <ListItem>
        <Code>removals</Code>: 要素の削除を通知する
      </ListItem>
      <ListItem>
        <Code>all</Code>: すべての変更を通知する
      </ListItem>
    </List>
    <Paragraph>
      スペース区切りで複数を指定でき、デフォルトは<Code>addtions text</Code>{" "}
      になっている
    </Paragraph>
    <DemoWrapper>
      <AriaRelevantDemo />
    </DemoWrapper>
  </SlideBase>,
  <SlideBase title="aria-busy" id="aria-busy">
    <Paragraph>要素が変更中で、待機してほしいことを示す。</Paragraph>
    <Paragraph>
      <Code>aria-busy="true"</Code>
      になっている要素にライブリージョンがある場合、ライブリージョンへの変更は無視されてもよい。
    </Paragraph>
    <DemoWrapper>
      <AriaBusyDemo />
    </DemoWrapper>
  </SlideBase>,
  <SlideBase title="暗黙のライブリージョン" id="implicit-live-region">
    <ImplicitLiveRegions />
    <DemoWrapper>
      <WhatTime
        role="alert"
        ariaLive="none"
        buttonLabel='いま何時？（role="alert"）'
        updateType="element"
        updateTagName="div"
      />
      <WhatTime
        role="log"
        ariaLive="none"
        buttonLabel='いま何時？（role="log"）'
        updateType="element"
        updateTagName="div"
      />
      <WhatTime
        role="status"
        ariaLive="none"
        buttonLabel='いま何時？（role="status"）'
        updateType="element"
        updateTagName="div"
      />
      <WhatTime
        liveRegionTagName="output"
        ariaLive="none"
        buttonLabel="いま何時？（output要素）"
        updateType="element"
        updateTagName="div"
      />
      <PoliteClock />
    </DemoWrapper>
  </SlideBase>,
  <SlideBase title="aria-liveの罠" id="wana">
    <Appear />
    <DemoWrapper>
      <AppearDemo />
    </DemoWrapper>
  </SlideBase>,
  <SlideBase title="出現を遅らせて読ませる" id="delay">
    <DelayedAppear />
  </SlideBase>,
  <SlideBase title="alert ロールの出現" id="alert">
    <Paragraph>
      <Code>alert</Code>
      ロールは、出現した瞬間に読み上げられる実装になっているスクリーンリーダーが多いらしい。
    </Paragraph>
    <Paragraph>
      アラートは何らかの事態が発生したときに出現するものなので、
      <Code>status</Code>や<Code>log</Code>
      のようにずっと置かれている想定がないのだと思われる
    </Paragraph>
    <DemoWrapper>
      <AppearDemo
        role="alert"
        ariaLive="none"
        buttonLabel='いま何時？（role="alert"）'
      />
      <AppearDemo
        ariaLive="assertive"
        buttonLabel='いま何時？（aria-live="assertive"）'
      />
      <AppearDemo
        tagName="output"
        ariaLive="none"
        buttonLabel="いま何時？（output要素）"
      />
      <AppearDemo
        role="status"
        ariaLive="none"
        buttonLabel='いま何時？（role="status"）'
      />
      <AppearDemo
        role="log"
        ariaLive="none"
        buttonLabel='いま何時？（role="log"）'
      />
    </DemoWrapper>
  </SlideBase>,
  <SlideBase title="スクリーンリーダーごとの挙動の違い" id="sr-behavior">
    <Paragraph>
      スクリーンリーダーごとに、
      <strong className="font-bold">
        ライブリージョンの挙動がかなり異なる
      </strong>
      。
    </Paragraph>
    <Paragraph>
      <Link href="https://a11ysupport.io/">
        Accessibility Support (a11ysupport.io)
      </Link>
      にまとめられているが、あらためて調査すると、テスト時とは状況が変化しているものもある模様。
    </Paragraph>
  </SlideBase>,
  <SlideBase title="PC-Talkerでのライブリージョン" id="pc-talker">
    <Paragraph>
      日本で最も使われているスクリーンリーダーであるPC-Talkerでは、裏メニューみたいな場所から有効化しなければライブリージョンを読み上げない
    </Paragraph>
    <Blockquote>
      <Paragraph>
        #PCトーカー には
        <br />
        アクセシビリティ通知
        <br />
        という機能があり、初期値はオフになっています。
        <br />
        オンにすると画面の変化など操作に役立つかもしれない情報を読み上げるようになります。
        <br />
        コントロール+Windows+オルト+V
        <br />
        で切り替えられます。
      </Paragraph>
    </Blockquote>
    <Paragraph>
      （
      <Link href="https://x.com/pc_slash/status/1802173731793727541">
        X: 視覚障害者(目の不自由な方々)のためのパソコン教室 スラッシュ
      </Link>
      ）
    </Paragraph>
    <Paragraph>情報は2025年4月現在のものです</Paragraph>
  </SlideBase>,
  <SlideBase
    title="macOS VoiceOver + Safari でのライブリージョン"
    id="macos-vo-safari"
  >
    <List>
      <ListItem>
        <Code>aria-live</Code>が<Code>polite</Code>だろうと
        <Code>assertive</Code>だろうと割り込む
      </ListItem>
      <ListItem>
        <Code>aria-atomic="true"</Code>
        のとき、なぜかライブリージョンのラベルも含めて2回読む
      </ListItem>
      <ListItem>
        <Code>&lt;output&gt;</Code>要素の挙動があやしい
        <List>
          <ListItem>
            <Code>&lt;output&gt;</Code>要素の内容をなぜか2回読む
          </ListItem>
          <ListItem>
            あとから挿入された<Code>&lt;output&gt;</Code>
            要素がライブリージョンにならない
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        ライブリージョン要素が出現してからしばらくはライブリージョンとして扱われない
      </ListItem>
    </List>
    <Note>
      情報は2025年4月にmacOS Sequoia 15.4.1で確認したものです
    </Note>
  </SlideBase>,
  <SlideBase title="NVDA + Chromeでのライブリージョン" id="nvda-chrome">
    <List>
      <ListItem>
        <Code>aria-live="polite"</Code>による通知はキューに入れて順番に読む。
        <List>
          <ListItem>
            <Code>aria-live="assertive"</Code>
            による通知があってもキューをクリアせず、読む予定のものを読みつづける。
          </ListItem>
          <ListItem>
            ただし、キーボードを操作するとキューがクリアされるので、あまり気にならないかもしれない
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        <Code>aria-atomic="false"</Code>は、
        <List>
          <ListItem>
            ライブリージョン直下の要素のみ、更新がその部分だけの通知になる
          </ListItem>
          <ListItem>
            <Code>&lt;div&gt;</Code>要素は部分的な通知の対象になるが、
            <Code>&lt;span&gt;</Code>要素は部分的な通知の対象とならない
          </ListItem>
          <ListItem>ライブリージョンのラベルは常に読む</ListItem>
        </List>
      </ListItem>
      <ListItem>
        <Code>aria-relevant="additions"</Code>
        では、ライブリージョン要素の直下に追加されたテキストノードを読まない
      </ListItem>
      <ListItem>
        <Code>aria-relevant="text"</Code>
        では、ライブリージョン要素の直下のテキストノードしか読まない
      </ListItem>
      <ListItem>
        <Code>aria-relevant="removals"</Code>で要素の削除を通知しない
      </ListItem>
      <ListItem>
        <Code>aria-busy="true"</Code>
        が指定されたライブリージョンの更新は通知しないが、
        <Code>aria-busy="true"</Code>でなくなったときに
        <Code>aria-busy="true"</Code>のときの更新を通知してくれない
      </ListItem>
    </List>
    <Note>
      情報は2025年4月にNVDA日本語版（2024.4.2jp(2024.4.2.3753)）およびGoogle
      Chrome 135.0.7049.115で確認したものです
    </Note>
  </SlideBase>,
  <SlideBase title="NVDA + Firefoxでのライブリージョン" id="nvda-firefox">
    <List>
      <ListItem>
        <Code>aria-live="polite"</Code>をキューに入れたり、
        <Code>aria-live="assertive"</Code>は割り込んだりする挙動は同じ
      </ListItem>
      <ListItem>
        <Code>aria-atomic="false"</Code>は、<Code>&lt;span&lgt;;</Code>要素でも
        <Code>&lt;div&gt;</Code>要素でも、直下の要素以外に対しても機能する
      </ListItem>
      <ListItem>
        <Code>aria-atomic="true"</Code>
        のとき、ライブリージョンのラベルは読み上げない
      </ListItem>
      <ListItem>
        <Code>aria-relevant</Code>や<Code>aria-busy</Code>の動作はChromeと同じ
      </ListItem>
      <ListItem>
        <Code>role="alert"</Code>の2回目以降の更新が通知されない
      </ListItem>
      <ListItem>
        <Code>role="status"</Code>や<Code>&lt;output&gt;</Code>要素の暗黙の
        <Code>aria-atomic="true"</Code>が機能していない
      </ListItem>
    </List>
    <Note>
      情報は2025年4月にNVDA日本語版（2024.4.2jp(2024.4.2.3753)）およびMozilla
      Firefox 137.0.2で確認したものです
    </Note>
  </SlideBase>,
  <SlideBase
    title="iOS VoiceOver + Safari でのライブリージョン"
    id="ios-vo-safari"
  >
    <List>
      <ListItem>
        <Code>aria-live="polite"</Code>
        による通知はキューに入れて順番に読み、ユーザー操作がトリガーの読み上げや、
        <Code>aria-live="assertive"</Code>
        による通知でキューをクリアするような挙動をする
      </ListItem>
      <ListItem>
        <Code>aria-atomic</Code>
        が設定された要素が更新されたとき、その要素のラベルは読み上げない
      </ListItem>
      <ListItem>
        <Code>aria-relevant="additions"</Code>が、
        <Code>aria-relevant="additions text"</Code>と差分のない状態になっている
      </ListItem>
      <ListItem>
        <Code>aria-busy="true"</Code>
        が指定されたライブリージョンの更新は通知しないが、
        <Code>aria-busy="true"</Code>でなくなったときに
        <Code>aria-busy="true"</Code>のときの更新を通知してくれない
      </ListItem>
      <ListItem>
        ライブリージョン要素が出現したとき、その内容を読み上げる
        <List>
          <ListItem>
            ただし<Code>&lt;output&gt;</Code>要素だけ出現時に読み上げない
          </ListItem>
          <ListItem>
            macOSのVoiceOverと違い、<Code>&lt;output&gt;</Code>
            の出現後はライブリージョンとして扱われる
          </ListItem>
        </List>
      </ListItem>
    </List>
    <Note>情報は2025年4月にiOS 18.4.1で確認したものです</Note>
  </SlideBase>,
  <SlideBase
    title="Android TalkBack + Chromeでのライブリージョン"
    id="android-talkback"
  >
    <List>
      <ListItem>
        <Code>aria-live="polite"</Code>と<Code>aria-live="assertive"</Code>
        の区別がない
      </ListItem>
      <ListItem>
        ライブリージョンによる通知はキューに入れられ、ユーザーの操作などが発生するとキューがクリアされる
      </ListItem>
      <ListItem>
        ライブリージョンにラベルを付けると、<Code>aria-atomic="true"</Code>
        のときにラベルだけ読み上げられ、内容が読み上げられない
      </ListItem>
      <ListItem>
        <Code>aria-atomic="false"</Code>
        を指定しても、ライブリージョン全体が読み上げられてしまう
      </ListItem>
      <ListItem>
        <Code>aria-relevant</Code>の値を変えても変化がない
      </ListItem>
      <ListItem>
        <Code>aria-busy="true"</Code>
        が指定されたライブリージョンの更新は通知しないが、
        <Code>aria-busy="true"</Code>でなくなったときに
        <Code>aria-busy="true"</Code>のときの更新を通知してくれない
      </ListItem>
      <ListItem>
        ライブリージョン要素が出現したとき、その内容を読み上げる
      </ListItem>
    </List>
    <Note>
      情報は2025年4月にAquos wish 4（Android 14, Google Chrome 135.0.7049.111,
      Androidユーザー補助設定ツール 15.2.1.743808607）で確認したものです
    </Note>
  </SlideBase>,
  <SlideBase title="おわりに" id="summary">
    <Paragraph>
      ライブリージョンは、Webコンテンツが複雑に変化する場合に、それを支援技術のユーザにも伝える手段となる。
    </Paragraph>
    <Paragraph>
      しかし、支援技術（スクリーンリーダー）によって挙動が異なることが多く、仕様書だけを見て凝ったことをやろうとするとユーザーには上手く伝わらない状況になりえる。
    </Paragraph>
    <Paragraph>
      いつもなら暗黙のロールや属性を使うことを推奨しているが、いまの状況では
      <Code>aria-live="polite"</Code>または<Code>aria-live="polite"</Code>と、
      <Code>aria-atomic="true"</Code>
      （ただし、ライブリージョンにラベルを付けない）以外を使うことは、はあまり推奨できない。
    </Paragraph>
  </SlideBase>,
];
