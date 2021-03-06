include_recipe "nginx"

cookbook_file '/etc/nginx/sites-available/mondedie-chat' do
  source 'mondedie-chat'
  action :create
end

nginx_site 'mondedie-chat' do
  enable true
  notifies :restart, 'service[nginx]'
end
