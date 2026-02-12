
-- Enable pg_net for HTTP requests from triggers
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Function to call Zapier webhook on new subscriber
CREATE OR REPLACE FUNCTION public.notify_zapier_new_subscriber()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM net.http_post(
    url := 'https://hooks.zapier.com/hooks/catch/26404285/ueqeiqt/',
    body := jsonb_build_object(
      'email', NEW.email,
      'subscribed_at', NEW.subscribed_at,
      'id', NEW.id
    ),
    headers := jsonb_build_object('Content-Type', 'application/json')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Trigger on INSERT
CREATE TRIGGER on_new_subscriber_zapier
AFTER INSERT ON public.subscribers
FOR EACH ROW
EXECUTE FUNCTION public.notify_zapier_new_subscriber();
