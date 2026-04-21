# FinCat Design System

Documentação oficial do design system da aplicação **FinCat: Finanças Pessoais**.

---

## Sumário

1. [Fundação Visual](#1-fundação-visual)
   - [Cores](#11-cores)
   - [Tipografia](#12-tipografia)
   - [Espaçamento](#13-espaçamento)
   - [Bordas e Raios](#14-bordas-e-raios)
   - [Animações](#15-animações)
2. [Componentes](#2-componentes)
   - [Button](#21-button)
   - [Badge](#22-badge)
   - [Input](#23-input)
   - [Card](#24-card)
   - [Dialog e Drawer](#25-dialog-e-drawer)
   - [Formulários](#26-formulários)
   - [Tipografia](#27-componentes-de-tipografia)
   - [Tags e Status](#28-tags-e-status)
   - [Navegação](#29-navegação)
   - [Feedback](#210-feedback)
3. [Arquitetura de Componentes](#3-arquitetura-de-componentes)
4. [Padrões de Layout](#4-padrões-de-layout)
5. [Ícones](#5-ícones)
6. [Acessibilidade](#6-acessibilidade)
7. [Modo Escuro](#7-modo-escuro)
8. [Mobile e PWA](#8-mobile-e-pwa)
9. [Padrões de Código](#9-padrões-de-código)

---

## 1. Fundação Visual

### 1.1 Cores

As cores são definidas como variáveis CSS em `:root` usando o espaço de cor **OKLCH**, com exceção das cores semânticas de marca, definidas em **HEX**.

#### Cores de Marca

| Token | Valor | Uso |
|---|---|---|
| `--primary` | `#ffce2d` | Amarelo FinCat — CTAs, elementos de destaque |
| `--destructive` | `#e30561` | Erros, ações destrutivas, deletar |
| `--success` | `#4ad9a2` | Confirmações, estados de sucesso |

#### Paleta Semântica (Light Mode)

| Token | Valor OKLCH | Uso |
|---|---|---|
| `--background` | `oklch(1 0 0)` | Fundo da página |
| `--foreground` | `oklch(0.141 0.005 285.823)` | Texto principal |
| `--card` | `oklch(1 0 0)` | Fundo de cards |
| `--card-foreground` | `oklch(0.141 0.005 285.823)` | Texto em cards |
| `--secondary` | `oklch(0.967 0.001 286.375)` | Elementos secundários |
| `--muted` | `oklch(0.967 0.001 286.375)` | Áreas silenciadas |
| `--muted-foreground` | `oklch(0.552 0.016 285.938)` | Texto placeholder/secundário |
| `--accent` | `oklch(0.967 0.001 286.375)` | Hover states |
| `--border` | `oklch(0.92 0.004 286.32)` | Bordas padrão |
| `--input` | `oklch(0.92 0.004 286.32)` | Borda de inputs |
| `--ring` | `oklch(0.795 0.184 86.047)` | Focus ring |

#### Paleta Semântica (Dark Mode)

| Token | Valor OKLCH |
|---|---|
| `--background` | `oklch(0.141 0.005 285.823)` |
| `--foreground` | `oklch(0.985 0 0)` |
| `--card` | `oklch(0.21 0.006 285.885)` |

> `--primary`, `--destructive` e `--success` são mantidos iguais nos dois modos.

#### Cores para Gráficos

| Token | Uso |
|---|---|
| `--chart-1` | Laranja `oklch(0.646 0.222 41.116)` |
| `--chart-2` | Azul `oklch(0.6 0.118 184.704)` |
| `--chart-3` | Azul escuro `oklch(0.398 0.07 227.392)` |
| `--chart-4` | Amarelo `oklch(0.828 0.189 84.429)` |
| `--chart-5` | Laranja claro `oklch(0.769 0.188 70.08)` |

#### Sidebar

| Token | Descrição |
|---|---|
| `--sidebar` | Fundo da sidebar `oklch(0.985 0 0)` |
| `--sidebar-foreground` | Texto da sidebar |
| `--sidebar-primary` | `#ffce2d` — item ativo |
| `--sidebar-border` | Borda interna |
| `--sidebar-ring` | Focus ring da sidebar |

---

### 1.2 Tipografia

**Família:** Poppins (Google Fonts)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
```

| Peso | Classe Tailwind | Uso |
|---|---|---|
| 300 | `font-light` | Textos de apoio |
| 400 | `font-normal` | Corpo de texto |
| 500 | `font-medium` | Labels, navegação |
| 600 | `font-semibold` | Headings, destaque |
| 700 | `font-bold` | Valores monetários, destaque forte |

#### Escala Tipográfica

| Componente | Classe | Uso |
|---|---|---|
| `TypographyH2` | `text-3xl font-semibold tracking-tight` | Título de seção principal |
| `TypographyH3` | `text-2xl font-semibold tracking-tight` | Subtítulo |
| `TypographyH4` | `text-xl font-semibold tracking-tight` | Título de card |
| `TypographyH5` | `text-lg font-semibold` | Título secundário |
| `TypographyH6` | `text-base font-semibold` | Label de grupo |

---

### 1.3 Espaçamento

O projeto usa a escala padrão do Tailwind com algumas frequências de uso:

| Classe | Valor | Uso frequente |
|---|---|---|
| `gap-1` | 4px | Ícone + label |
| `gap-1.5` | 6px | Itens compactos |
| `gap-2` | 8px | Grupos de elementos |
| `gap-4` | 16px | Seções internas |
| `p-4` | 16px | Padding padrão de card/container |
| `pb-24` | 96px | Espaço para menu footer mobile |
| `pb-30` | 120px | Espaço para floating button mobile |

---

### 1.4 Bordas e Raios

| Token CSS | Valor calculado | Uso |
|---|---|---|
| `--radius` | `0.65rem` | Base |
| `--radius-sm` | `0.25rem` | Badges, tags pequenas |
| `--radius-md` | `0.45rem` | Inputs, buttons |
| `--radius-lg` | `0.65rem` | Cards, containers |
| `--radius-xl` | `1.05rem` | Modals, drawers |

---

### 1.5 Animações

| Nome | Comportamento | Duração |
|---|---|---|
| `CalendarAnimationUp` | `translateY(300%)` → `translateY(0)` | 300ms ease-in-out |
| `CalendarOverlayAnimationUp` | `opacity: 0` → `opacity: 0.5` | 300ms ease-in-out |
| `bob-chevron` | `translateY(0)` ↔ `translateY(-8px)` | 1.5s ease-in-out infinite |

Animações adicionais via `tw-animate-css`: fade, zoom, slide.

---

## 2. Componentes

### 2.1 Button

Localização: `src/components/atoms/ui/button.tsx`

Implementado com **CVA (Class Variance Authority)**.

#### Variantes

| Variant | Aparência | Uso |
|---|---|---|
| `default` | Fundo `--primary` amarelo | CTA principal |
| `destructive` | Fundo `--destructive` rosa/vermelho | Ações destrutivas |
| `buy` | Fundo verde | Compra, ação positiva |
| `black` | Fundo escuro | Ação neutra forte |
| `outline` | Apenas borda | Ação secundária |
| `secondary` | Fundo claro | Ação secundária suave |
| `ghost` | Sem fundo | Ação discreta |
| `white` | Fundo accent | Variante clara |
| `smoker` | Cinza | Desabilitado visual |
| `link` | Texto sublinhado | Ação tipo link |
| `success` | Fundo verde | Confirmação |

#### Tamanhos

| Size | Altura | Uso |
|---|---|---|
| `default` | `h-9` | Padrão |
| `sm` | `h-8` | Compacto, formulários |
| `lg` | `py-4 px-6` | CTA destacado |
| `icon` | `size-9` | Apenas ícone |

```tsx
// Exemplos de uso
<Button variant="default">Salvar</Button>
<Button variant="destructive" size="sm">Excluir</Button>
<Button variant="outline" size="lg">Cancelar</Button>
<Button variant="ghost" size="icon"><Trash2 /></Button>
```

---

### 2.2 Badge

Localização: `src/components/atoms/ui/badge.tsx`

#### Variantes

| Variant | Cor | Uso |
|---|---|---|
| `default` | Amarelo primário | Status padrão |
| `secondary` | Cinza claro | Status neutro |
| `destructive` | Rosa/vermelho | Erro, alerta crítico |
| `outline` | Apenas borda | Status discreto |
| `success` | Verde | Sucesso, positivo |
| `warning` | Amarelo/laranja | Atenção |

```tsx
<Badge variant="success">Pago</Badge>
<Badge variant="destructive">Atrasado</Badge>
<Badge variant="warning">Pendente</Badge>
```

---

### 2.3 Input

Localização: `src/components/atoms/ui/input.tsx`

Base para todos os inputs. Inclui estados de erro via `aria-invalid`.

#### Inputs Customizados (`src/components/atoms/Inputs/`)

| Componente | Máscara | Exemplo |
|---|---|---|
| `InputMoney` | BRL com `Intl.NumberFormat` | `R$ 1.234,56` |
| `InputMoneyInline` | Versão inline editável | — |
| `InputPassword` | Toggle show/hide (Eye icon) | — |
| `InputSearch` | Debounce + botão busca | — |
| `InputCpf` | CPF | `123.456.789-00` |
| `InputCnpj` | CNPJ | `12.345.678/0001-90` |
| `InputCpfCnpj` | Detecta automaticamente | — |
| `InputCreditCard` | Cartão de crédito | `XXXX XXXX XXXX 1234` |
| `InputValidity` | Validade de cartão | `MM/YY` |
| `InputPhone` | Telefone | `(11) 99999-9999` |
| `InputCep` | CEP | `00000-000` |
| `InputCoupon` | Cupom de desconto | — |

---

### 2.4 Card

Localização: `src/components/atoms/ui/card.tsx`

Componente composto com sub-componentes:

```tsx
<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
    <CardDescription>Descrição</CardDescription>
    <CardAction>
      <Button variant="ghost" size="icon">...</Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    {/* conteúdo */}
  </CardContent>
  <CardFooter>
    {/* rodapé */}
  </CardFooter>
</Card>
```

#### ActionCard (Molecule)

Card clicável para listagens de ações:

```tsx
// bg-stone-100, hover:bg-stone-200, com ícone + título + ChevronRight
<ActionCard icon={<House />} title="Carteiras" href="/app/carteiras" />
```

---

### 2.5 Dialog e Drawer

#### Dialog

Localização: `src/components/atoms/ui/dialog.tsx`  
Baseado em **Radix UI Dialog** — acessível por padrão.

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Abrir</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Título</DialogTitle>
      <DialogDescription>Descrição</DialogDescription>
    </DialogHeader>
    {/* conteúdo */}
  </DialogContent>
</Dialog>
```

#### Drawer

Localização: `src/components/atoms/ui/drawer.tsx`  
Powered by **Vaul** — animações de deslizamento.

#### DrawerCalendar

Drawer especializado com animação `CalendarAnimationUp` para seletores de data em mobile.

---

### 2.6 Formulários

Localização: `src/components/atoms/ui/form.tsx`

Stack: **react-hook-form** + **Zod** + `@hookform/resolvers`.

#### Estrutura padrão

```tsx
const schema = z.object({
  valor: z.coerce.number().nonnegative("Valor inválido"),
  descricao: z.string().max(255, "Máximo 255 caracteres"),
  data: z.date(),
});

function MeuForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { valor: 0, descricao: "", data: new Date() },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="descricao"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Input placeholder="..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
```

#### Sub-componentes de Form

| Componente | Função |
|---|---|
| `Form` | Provider do contexto do form |
| `FormField` | Conecta field ao Controller do RHF |
| `FormItem` | Container de um campo |
| `FormLabel` | Label acessível (vinculado ao input) |
| `FormControl` | Wrapper que injeta `aria-invalid`, `aria-describedby` |
| `FormDescription` | Texto auxiliar |
| `FormMessage` | Mensagem de erro do Zod |

---

### 2.7 Componentes de Tipografia

Localização: `src/components/atoms/typography/`

```tsx
import { TypographyH2 } from "@/components/atoms/typography/TypographyH2";

<TypographyH2>Resumo do Mês</TypographyH2>
```

---

### 2.8 Tags e Status

#### Tag

Base genérica: `flex items-center gap-2 rounded p-1 font-semibold text-2xs w-fit`

#### CategoryTag

Tag com ícone dinâmico Lucide e cor de background customizável.

```tsx
<CategoryTag icon="House" color="#ffce2d" label="Moradia" />
```

#### FrequencyTag

Exibe frequência de transação com ícone TrendingUp/TrendingDown.

| Frequência | Valor |
|---|---|
| `DAILY` | Diário |
| `WEEKLY` | Semanal |
| `MONTHLY` | Mensal |
| `YEARLY` | Anual |

#### ProgressGoal

Progress bar com lógica de cor:
- `< 80%` → cor `--primary`
- `>= 80%` → cor `--success`

---

### 2.9 Navegação

#### Sidebar (Desktop)

Localização: `src/components/molecules/AppSidebar/`

Usa `SidebarProvider` + `useSidebar()` para controle de estado aberto/fechado.

#### Menu Footer Mobile

Localização: `src/components/molecules/MobileFooterMenu/`

Fixo no fundo da tela com os itens de navegação principais.

#### Configuração de Rotas de Navegação

```tsx
// Desktop e Mobile têm configurações separadas
const navMainWeb = [
  { title: "Início",     url: "/app/home",       icon: House },
  { title: "Finanças",   url: "/app/flows",      icon: DollarSign },
  { title: "Fixos",      url: "/app/fixos",      icon: Calendar },
  { title: "Cartões",    url: "/app/cartoes",    icon: CreditCard },
  { title: "Categorias", url: "/app/categorias", icon: Archive },
  { title: "Metas",      url: "/app/metas",      icon: Target },
];
```

#### Proteção de Rotas

```tsx
// Autenticação
<ProtectedRoute>
  <MinhaPagina />
</ProtectedRoute>

// Permissão específica
<PrivilegeRoute privilege="ADMIN">
  <PaginaAdmin />
</PrivilegeRoute>
```

---

### 2.10 Feedback

#### Toast (Sonner)

Localização: `src/components/atoms/ui/sonner.tsx`

Suporte a dark/light mode automático via `next-themes`.

| Tipo | Ícone | Uso |
|---|---|---|
| `success` | `CircleCheckBig` | Operação bem-sucedida |
| `error` | `CircleAlert` | Erro de operação |
| `warning` | `TriangleAlert` | Alerta de atenção |

```tsx
import { toast } from "sonner";

toast.success("Transação criada!");
toast.error("Erro ao salvar.");
toast.warning("Limite próximo.");
```

#### Skeleton

Localização: `src/components/atoms/ui/skeleton.tsx`

Usado para loading states. Skeletons dedicados por contexto:
- `FlowCardListSkeleton`
- `FlowListSkeleton`
- `RecurrencyViewSkeleton`

```tsx
// Uso básico
<Skeleton className="h-4 w-[200px]" />

// Componente dedicado
<FlowListSkeleton />
```

#### FloatingButton

```tsx
// Posição: fixed bottom-30 right-4 z-50
<FloatingButton onClick={openForm}>
  <Plus />
</FloatingButton>
```

---

## 3. Arquitetura de Componentes

O projeto segue **Atomic Design**:

```
src/components/
├── atoms/          # Componentes base, reutilizáveis isoladamente
│   ├── ui/         # Primitivos: Button, Input, Card, Dialog...
│   ├── Inputs/     # Inputs com máscara
│   └── typography/ # Headings tipográficos
│
├── molecules/      # Combinações de atoms com lógica simples
│   ├── header/
│   ├── AppSidebar/
│   ├── MobileFooterMenu/
│   ├── TransactionItem/
│   ├── skeletons/
│   └── ...
│
├── organisms/      # Blocos complexos com regras de negócio
│   └── forms/      # GoalForm, PaymentCardForm, AddMemberForm...
│
├── templates/      # Estrutura de layout de páginas
│   ├── AppTemplate/        # Sidebar + Outlet (autenticado)
│   ├── AppSimpleTemplate/  # Sem sidebar
│   └── StarterTemplate/    # Login/Register
│
└── pages/          # Telas completas conectadas às rotas
    ├── Home, Flows, Fixos, Cartoes
    ├── Categorias, Metas
    ├── Settings, Plans
    └── Policy/*
```

---

## 4. Padrões de Layout

### Template Principal (Autenticado)

```tsx
// AppTemplate: sidebar + conteúdo com safe area
<SidebarProvider>
  <AppSidebar />
  <div className="absolute inset-0 overflow-auto">
    <Outlet />
  </div>
</SidebarProvider>
```

### Template Simples (Sem Sidebar)

```tsx
// Usado em formulários e páginas secundárias
<div className="p-4 pb-0 pt-4 max-md:pb-24">
  <Outlet />
</div>
```

### Safe Area (Mobile)

```css
#root {
  padding-top: var(--status-bar-height, env(safe-area-inset-top));
  padding-bottom: env(safe-area-inset-bottom);
}
```

### Padrões Flexbox frequentes

```tsx
// Header de seção
<div className="flex items-center justify-between gap-2">

// Grid responsivo de card
<div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-4">

// Lista vertical
<div className="flex flex-col gap-2">
```

---

## 5. Ícones

**Biblioteca:** `lucide-react` (v0.513.0)

#### Uso Direto

```tsx
import { House, DollarSign, CreditCard } from "lucide-react";

<House className="size-4" />
<DollarSign className="size-5 text-primary" />
```

#### Ícone Dinâmico

Para ícones cujo nome vem da API ou configuração do usuário:

```tsx
import { DynamicLucideIcon } from "@/components/atoms/DynamicLucideIcon";

// iconName deve ser o nome capitalizado do ícone Lucide
<DynamicLucideIcon iconName="House" className="size-4" />
```

#### IconPicker

Componente de seleção de ícone com preview, usado em configuração de categorias.

---

## 6. Acessibilidade

### Padrões implementados

#### Formulários
```tsx
// FormControl injeta automaticamente:
aria-invalid={!!error}
aria-describedby="${formDescriptionId} ${formMessageId}"
```

#### Inputs com erro
```tsx
className="aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
```

#### Focus Ring
```tsx
className="focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-hidden"
```

#### Textos ocultos para screen readers
```tsx
<span className="sr-only">Fechar</span>
```

#### Navegação semântica
```tsx
<nav aria-label="breadcrumb">
  <Breadcrumb>...</Breadcrumb>
</nav>
```

#### Radix UI
Todos os componentes baseados em Radix UI (`Dialog`, `Select`, `Checkbox`, `RadioGroup`, `Tooltip`, `DropdownMenu`) são acessíveis por padrão com gerenciamento de foco, `aria-*` e interação por teclado.

### Identificação via data-slot

Componentes usam `data-slot` para identificação semântica em testes e styling:

```tsx
data-slot="button"
data-slot="input"
data-slot="card"
data-slot="form-item"
```

---

## 7. Modo Escuro

Gerenciado por `next-themes` com suporte a `system`, `light` e `dark`.

```tsx
import { useTheme } from "next-themes";

const { theme, setTheme } = useTheme();
// theme: "light" | "dark" | "system"
```

As variáveis CSS em `.dark` invertem automaticamente `background`/`foreground` mantendo cores semânticas (`--primary`, `--destructive`, `--success`) inalteradas para garantir contraste em ambos os modos.

---

## 8. Mobile e PWA

### Capacitor

O projeto é compilado como app nativo via **Capacitor** com suporte a Android e iOS.

#### Hooks mobile

| Hook | Função |
|---|---|
| `useMobile()` | Detecta breakpoint mobile |
| `useNativeBack()` | Intercepta botão voltar nativo |
| `useStatusBar()` | Gerencia status bar do SO |

### PWA

| Configuração | Valor |
|---|---|
| Nome | FinCat: Finanças Pessoais |
| Short name | FinCat |
| Display | `standalone` |
| Theme color | white |
| Background | white |
| Categories | finance, productivity |
| Register | `autoUpdate` |

### Breakpoint customizado mobile

```css
--breakpoint-xs: 23.2rem; /* ~371px */
```

---

## 9. Padrões de Código

### Utilitário `cn`

```tsx
import { cn } from "@/lib/utils";

// Combina tailwind-merge + clsx
className={cn(
  "base-classes",
  condition && "conditional-class",
  props.className,
)}
```

### CVA — Class Variance Authority

```tsx
import { cva, type VariantProps } from "class-variance-authority";

const variants = cva("base", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground",
      outline: "border border-input bg-background",
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 px-3",
    },
  },
  defaultVariants: { variant: "default", size: "default" },
});

interface Props extends VariantProps<typeof variants> {
  className?: string;
}
```

### Serviços de API

```tsx
// Todos os serviços usam axios com interceptadores
// Retornam Promise e lançam AbstractException em erros
const data = await flowService.list({ page: 0, size: 20 });
```

### Formatadores

```tsx
import { formatCurrency } from "@/utils/formaters/formatCurrency";
import { formatDateTime } from "@/utils/formaters/formatDateTime";

formatCurrency(1234.56);       // "R$ 1.234,56"
formatDateTime(new Date());    // "21/04/2026"
```

### Paginação

```tsx
import { usePagination } from "@/hooks/usePagination";

const { pages, currentPage, goToPage } = usePagination({
  totalPages: 10,
  currentPage: 1,
});
// Suporta DOTS (ellipsis) para muitas páginas
```

---

## Referências de Tecnologia

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 19 | Framework UI |
| TypeScript | 5.x | Tipagem estática |
| Tailwind CSS | 4.1.8 | Utilitários CSS |
| Radix UI | múltiplas | Primitivos acessíveis |
| react-hook-form | 7.66.0 | Gerenciamento de forms |
| Zod | 3.25.76 | Validação de schema |
| Lucide React | 0.513.0 | Ícones |
| date-fns | 4.1.0 | Manipulação de datas |
| Sonner | 2.0.5 | Toast notifications |
| next-themes | 0.4.6 | Dark mode |
| ApexCharts | 5.3.5 | Gráficos |
| Capacitor | — | App nativo Android/iOS |
| Vaul | 1.1.2 | Drawer animado |
| CVA | 0.7.1 | Variantes de componentes |
| tailwind-merge | 3.3.0 | Merge de classes Tailwind |
