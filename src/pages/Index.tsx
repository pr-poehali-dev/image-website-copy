import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-[#FF6B35]">BEST</span>
              <span className="text-[#2D2D2D]">BURGERS</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-[#2D2D2D] hover:text-[#FF6B35] transition-colors">Каталог бургеров</a>
            <a href="#" className="text-[#2D2D2D] hover:text-[#FF6B35] transition-colors">Доставка</a>
            <a href="#" className="text-[#2D2D2D] hover:text-[#FF6B35] transition-colors">Как готовим</a>
            <a href="#" className="text-[#2D2D2D] hover:text-[#FF6B35] transition-colors">О нас</a>
            <a href="#" className="text-[#2D2D2D] hover:text-[#FF6B35] transition-colors">Где забрать</a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm text-[#2D2D2D]">
              <Icon name="MapPin" size={16} />
              <span>г. Москва, ул. Тверская, д.1</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#2D2D2D] to-[#1a1a1a] text-white overflow-hidden">
        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-[#FF6B35] text-white mb-4">
                  Бургеры от Best Burgers
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                  СОЧНЕЙШИЙ <span className="text-[#FF6B35]">ВКУС</span><br />
                  В КАЖДОМ УКУСЕ!
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-lg">
                  Бургеры от best burgers — это идеально приготовленное мясо, 
                  свежие ингредиенты и авторские соусы, которые создают 
                  незабываемый вкус! Попробуй и сам почувствуй вкус в стиле 
                  настоящих американских ресторанов вкусо качественной еды.
                </p>
                <Button 
                  size="lg" 
                  className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-8 py-4 text-lg"
                >
                  ВЫБРАТЬ БУРГЕР
                </Button>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-white"></div>
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <Icon key={star} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-300">150+ отзывов</p>
                </div>
              </div>
            </div>
            
            <div className="relative lg:block">
              <img 
                src="/img/c4e59eaa-ca0f-4948-92d6-53a267e92cfd.jpg" 
                alt="Сочный бургер" 
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute top-4 left-4 bg-[#FF6B35] text-white px-3 py-2 rounded-lg flex items-center space-x-2">
                <Icon name="Play" size={16} />
                <span className="text-sm font-medium">Смотри как готовим лучшие бургеры в городе</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2D2D2D] mb-4">
              НАШЕ МЕНЮ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Каждый бургер готовится с любовью из отборных ингредиентов
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Классический", price: "690₽", desc: "Говядина, сыр, салат, помидор, лук, соус" },
              { name: "Чизбургер Делюкс", price: "790₽", desc: "Двойная котлета, двойной сыр, бекон" },
              { name: "BBQ Мастер", price: "850₽", desc: "Говядина, соус BBQ, лук фри, сыр чеддер" },
              { name: "Острый Халапеньо", price: "820₽", desc: "Говядина, халапеньо, острый сыр, соус" },
              { name: "Грибной", price: "750₽", desc: "Говядина, грибы, сыр, трюфельный соус" },
              { name: "Авокадо Фреш", price: "780₽", desc: "Говядина, авокадо, руккола, томаты" }
            ].map((burger, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Beef" size={48} className="text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">{burger.name}</h3>
                  <p className="text-gray-600 mb-4">{burger.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#FF6B35]">{burger.price}</span>
                    <Button className="bg-[#FF6B35] hover:bg-[#E55A2B]">
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2D2D2D] mb-4">
              ОТЗЫВЫ НАШИХ ГОСТЕЙ
            </h2>
            <p className="text-xl text-gray-600">
              Более 1000 довольных клиентов каждый месяц
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Анна К.", rating: 5, text: "Лучшие бургеры в городе! Мясо сочное, булочки свежие, соусы восхитительные. Теперь заказываем только здесь!" },
              { name: "Михаил С.", rating: 5, text: "Быстрая доставка, горячие бургеры и отличный сервис. Особенно понравился BBQ Мастер - рекомендую всем!" },
              { name: "Елена П.", rating: 5, text: "Заказывали на корпоратив, все были в восторге! Качество на высоте, порции большие, цены адекватные." }
            ].map((review, index) => (
              <Card key={index} className="bg-gray-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Icon 
                        key={star} 
                        name="Star" 
                        size={16} 
                        className={star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{review.text}"</p>
                  <p className="font-medium text-[#2D2D2D]">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FF6B35]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ГОЛОДЕН? ЗАКАЖИ ПРЯМО СЕЙЧАС!
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Доставим горячие бургеры за 30 минут или бесплатно
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#FF6B35] hover:bg-gray-100 px-8 py-4">
              <Icon name="Phone" size={20} className="mr-2" />
              ПОЗВОНИТЬ
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#FF6B35] px-8 py-4">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              ЗАКАЗАТЬ ОНЛАЙН
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-[#FF6B35]">BEST</span>BURGERS
              </div>
              <p className="text-gray-300">
                Лучшие бургеры в городе с доставкой и самовывозом
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-300">
                <p>📞 +7 (495) 123-45-67</p>
                <p>📍 г. Москва, ул. Тверская, д.1</p>
                <p>⏰ Работаем с 10:00 до 23:00</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Следите за нами</h3>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={24} className="text-gray-300 hover:text-[#FF6B35] cursor-pointer" />
                <Icon name="Facebook" size={24} className="text-gray-300 hover:text-[#FF6B35] cursor-pointer" />
                <Icon name="Twitter" size={24} className="text-gray-300 hover:text-[#FF6B35] cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;