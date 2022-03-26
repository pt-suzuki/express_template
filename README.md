# express_template

expressのAPIアプリケーションのテンプレート

## ローカル開発時のアプリ起動

```shell
# node_moduleのinstall
npm install

# Hot Reloadモード スタート
npm run dev

```

---

## テスト

```shell
# eslint実行
npm run lint

# eslint実行 & 修正
npm run lint:fix

# jest実行
npm run test

```

## Docker

### ビルド ＆ スタート

```shell

#imageビルド
docker build -f docker/Dockerfile -t express-template .

#コンテナ起動
docker run -p 30000:30000 express-template

```

### local起動

```shell

docker compose up

```

## GitHub Action

テストの実行、dockerのビルド&リポジトリへのプッシュ、Slackへの通知を実行
シークレットを指定するとリポジトリへのプッシュ、Slackへの通知が動く
.envのコピーは適当に変えてください

### シークレット

#### DOCKER_REGISTRY_NAME

Dcoker RepositoryのURLを指定

#### SLACK_WEBHOOK_URL

通知に使用するSlack WebhookのURLを指定
