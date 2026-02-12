
CREATE TABLE public.bug_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  description text,
  game_state text,
  browser_info text,
  recent_errors text,
  status text NOT NULL DEFAULT 'new'
);

ALTER TABLE public.bug_reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "allow_anonymous_insert"
  ON public.bug_reports FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "allow_anonymous_update_description"
  ON public.bug_reports FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE POLICY "allow_authenticated_select"
  ON public.bug_reports FOR SELECT
  TO authenticated
  USING (true);
