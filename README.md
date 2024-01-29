<div align="center">
<a target="_blank" rel="noopener noreferrer nofollow" href="https://caffeineeee.me">
    <img alt='Personal Site' src="./src/app/opengraph-image.png" />
</a>
</div>

# caffeineeee.me

💠Personal Site

## Getting Started

First, run the development server:

```bash
git clone https://github.com/caffeineeee/caffeineeee.me.git
```

```bash
cd caffeineeee.me
```

```bash
pnpm i
```

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Schema

```sql

CREATE TABLE guestbook (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  created_by VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL
);

```