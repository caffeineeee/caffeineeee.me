CREATE TABLE `guestbook` (
	`id` text(128) PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`body` text NOT NULL,
	`created_by` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
