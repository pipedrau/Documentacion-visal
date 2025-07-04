/* eslint-disable react/no-unescaped-entities */
import { ContentSection } from '@/types/content';
import { categories } from './categories';
import { SectionHeader } from '@/components/content/SectionHeader';
import { ContentCard } from '@/components/content/ContentCard';
import { StatsGrid } from '@/components/ui/StatsGrid';
import { ComparisonTable } from '@/components/ui/ComparisonTable';
import { ProcessSteps } from '@/components/ui/ProcessSteps';
import { TrendCard } from '@/components/ui/TrendCard';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { 
  NeumorphismExample, 
  GlassmorphismExample, 
  MaterialDesignExample, 
  DarkModeExample, 
  BrutalismExample, 
  ClaymorphismExample,
  AllTrendExamples 
} from '@/components/ui/TrendExamples';

const fundamentalsCategory = categories.find(c => c.id === 'fundamentals')!;
const trendsCategory = categories.find(c => c.id === 'trends')!;
const applicationCategory = categories.find(c => c.id === 'application')!;

export const sections: ContentSection[] = [
  {
    id: 'introduction',
    title: 'Introducción',
    description: 'Una exploración profunda de los principios fundamentales que rigen el diseño de interfaces coherentes',
    category: fundamentalsCategory,
    order: 1,
    estimatedReadTime: 5,
    tags: ['fundamentos', 'introducción', 'principios'],
    content: (
      <div className="space-y-8">
        <SectionHeader
          title="Investigación | Consistencia Visual"
          description="Una exploración profunda de los principios fundamentales que rigen el diseño de interfaces coherentes y las tendencias actuales que moldean la industria."
          category={fundamentalsCategory}
          estimatedReadTime={5}
          tags={['fundamentos', 'introducción', 'principios']}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ContentCard
            title="Objetivos"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            }
            variant="highlighted"
          >
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-success text-white flex items-center justify-center text-xs font-bold mt-0.5">✓</div>
                <span>Dominar los principios de consistencia visual</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-success text-white flex items-center justify-center text-xs font-bold mt-0.5">✓</div>
                <span>Entender cuándo aplicar o evitar tendencias</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-success text-white flex items-center justify-center text-xs font-bold mt-0.5">✓</div>
                <span>Desarrollar criterios objetivos de diseño</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-success text-white flex items-center justify-center text-xs font-bold mt-0.5">✓</div>
                <span>Crear sistemas escalables y coherentes</span>
              </li>
            </ul>
          </ContentCard>

          <ContentCard
            title="Para quién"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.998 2.998 0 0 0 17.11 7H16c-.8 0-1.54.37-2.01.99l-2.98 3.98L8 10l-1.46 1.46L8 13h1.5v7.5c0 .28.22.5.5.5s.5-.22.5-.5V14h.5v5.5c0 .28.22.5.5.5s.5-.22.5-.5v-7H15v6h1v-6h2.5l-.5 1.5V22h2z"/>
              </svg>
            }
            variant="bordered"
          >
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold mt-0.5">👨‍💻</div>
                <span>Diseñadores UI/UX</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold mt-0.5">⚡</div>
                <span>Desarrolladores Frontend</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold mt-0.5">📊</div>
                <span>Product Managers</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold mt-0.5">👥</div>
                <span>Equipos de desarrollo completos</span>
              </li>
            </ul>
          </ContentCard>

          <ContentCard
            title="Contenido"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
              </svg>
            }
            variant="gradient"
          >
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-warning text-white flex items-center justify-center text-xs font-bold mt-0.5">15</div>
                <span>15 secciones detalladas</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-warning text-white flex items-center justify-center text-xs font-bold mt-0.5">🛠️</div>
                <span>Frameworks prácticos</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-warning text-white flex items-center justify-center text-xs font-bold mt-0.5">🏢</div>
                <span>Ejemplos reales de la industria</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-warning text-white flex items-center justify-center text-xs font-bold mt-0.5">📏</div>
                <span>Herramientas de evaluación</span>
              </li>
            </ul>
          </ContentCard>
        </div>

        <ContentCard
          title="Conceptos clave que exploraremos"
          variant="highlighted"
          className="mt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-default-50 dark:bg-default-900/20">
              <h4 className="font-semibold text-foreground mb-2">Consistencia Interna/Externa</h4>
              <p className="text-default-600 text-sm">Diferencias y aplicaciones estratégicas</p>
            </div>
            <div className="p-4 rounded-lg bg-default-50 dark:bg-default-900/20">
              <h4 className="font-semibold text-foreground mb-2">Sistemas de Diseño</h4>
              <p className="text-default-600 text-sm">Creación y mantenimiento efectivo</p>
            </div>
            <div className="p-4 rounded-lg bg-default-50 dark:bg-default-900/20">
              <h4 className="font-semibold text-foreground mb-2">Decisiones Basadas en Datos</h4>
              <p className="text-default-600 text-sm">Frameworks para evaluar cambios visuales</p>
            </div>
            <div className="p-4 rounded-lg bg-default-50 dark:bg-default-900/20">
              <h4 className="font-semibold text-foreground mb-2">Tendencias vs. Usabilidad</h4>
              <p className="text-default-600 text-sm">Balance estratégico entre innovación y función</p>
            </div>
          </div>
        </ContentCard>
      </div>
    )
  },
  {
    id: 'what-is-visual-consistency',
    title: '¿Qué es la consistencia visual?',
    description: 'Definición fundamental y tipos de consistencia en interfaces digitales',
    category: fundamentalsCategory,
    order: 2,
    estimatedReadTime: 8,
    tags: ['definición', 'principios', 'tipos'],
    content: (
      <div className="space-y-8">
        <SectionHeader
          title="¿Qué es la consistencia visual?"
          description="La consistencia visual es el principio fundamental que asegura que todos los elementos gráficos y patrones de interacción se comporten de manera uniforme y predecible."
          category={fundamentalsCategory}
          estimatedReadTime={8}
          tags={['definición', 'principios', 'tipos']}
        />

        <ContentCard
          title="Definición Fundamental"
          variant="highlighted"
          className="mb-8"
        >
          <p className="text-lg leading-relaxed">
            La consistencia visual es el principio que asegura que <strong>todos los elementos gráficos y patrones de interacción se comporten de manera uniforme y predecible</strong> a lo largo de un producto digital.
          </p>
        </ContentCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContentCard
            title="Consistencia Interna"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/>
              </svg>
            }
            variant="bordered"
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Definición:</h4>
                <p className="text-default-600">Uniformidad dentro de una misma aplicación o familia de productos</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Ejemplo:</h4>
                <p className="text-default-600">Microsoft Office usa iconos, menús y atajos idénticos en Word, Excel y PowerPoint</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Impacto:</h4>
                <p className="text-default-600">El usuario aprende una vez y transfiere ese conocimiento</p>
              </div>
            </div>
          </ContentCard>

          <ContentCard
            title="Consistencia Externa"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            }
            variant="bordered"
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Definición:</h4>
                <p className="text-default-600">Adherencia a estándares de plataforma y convenciones industriales</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Ejemplos:</h4>
                <ul className="text-default-600 space-y-1 text-sm">
                  <li>• Logo de la marca siempre arriba a la izquierda</li>
                  <li>• Ícono de lupa universalmente para "buscar"</li>
                  <li>• Botón "X" para cerrar ventanas</li>
                </ul>
              </div>
            </div>
          </ContentCard>
        </div>
      </div>
    )
  },
  {
    id: 'importance-ux-teams',
    title: 'Importancia para UX y equipos',
    description: 'La consistencia visual como estrategia de producto que mejora UX y optimiza equipos',
    category: fundamentalsCategory,
    order: 3,
    estimatedReadTime: 7,
    tags: ['UX', 'equipos', 'estrategia', 'productividad'],
    content: (
      <div className="space-y-8">
        <SectionHeader
          title="Importancia para UX y equipos"
          description="La consistencia visual no es solo estética: es una estrategia de producto que mejora la experiencia del usuario y optimiza el trabajo en equipo."
          category={fundamentalsCategory}
          estimatedReadTime={7}
          tags={['UX', 'equipos', 'estrategia', 'productividad']}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ContentCard
            title="🧠 Reducción de Carga Cognitiva"
            variant="bordered"
          >
            <div className="space-y-3">
              <p><strong>Principio:</strong> El cerebro humano busca patrones para procesar información eficientemente</p>
              <p><strong>Aplicación:</strong> Cuando los elementos se comportan de manera predecible, el usuario no gasta energía mental "reaprendiendo" cada pantalla</p>
              <p><strong>Ejemplo:</strong> Si todos los botones primarios son azules y están en la esquina inferior derecha, el usuario sabe instintivamente dónde buscar la acción principal</p>
            </div>
          </ContentCard>

          <ContentCard
            title="🔄 Transferencia de Aprendizaje"
            variant="bordered"
          >
            <div className="space-y-3">
              <p><strong>Jakob's Law:</strong> Los usuarios pasan más tiempo en otros sitios que en el tuyo</p>
              <p><strong>Implicación:</strong> Debemos aprovechar convenciones existentes para acelerar la curva de aprendizaje</p>
              <p><strong>Resultado:</strong> Menor tiempo de onboarding, mayor sensación de familiaridad</p>
            </div>
          </ContentCard>

          <ContentCard
            title="🛡️ Construcción de Confianza"
            variant="bordered"
          >
            <div className="space-y-3">
              <p><strong>Profesionalidad Percibida:</strong> Interfaces consistentes se perciben como más confiables y pulidas</p>
              <p><strong>Predictabilidad:</strong> Los usuarios se sienten en control cuando saben qué esperar</p>
              <p><strong>Ejemplo negativo:</strong> Un e-commerce donde los botones cambian de color y posición genera desconfianza sobre la seguridad del sitio</p>
            </div>
          </ContentCard>
        </div>

        <ContentCard
          title="Beneficios para el trabajo en equipo"
          variant="highlighted"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                ⚡ Eficiencia en el Desarrollo
              </h4>
              <ul className="space-y-2 text-sm text-default-600">
                <li><strong>Reutilización de Componentes:</strong> Una vez creado un botón, se usa en toda la aplicación</li>
                <li><strong>Menos Decisiones:</strong> Los desarrolladores no debaten cada elemento visual</li>
                <li><strong>QA Simplificado:</strong> Es más fácil detectar inconsistencias cuando hay reglas claras</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                📈 Escalabilidad del Producto
              </h4>
              <ul className="space-y-2 text-sm text-default-600">
                <li><strong>Nuevas Funcionalidades:</strong> Se integran naturalmente usando componentes existentes</li>
                <li><strong>Onboarding de Nuevos Miembros:</strong> El sistema de diseño actúa como documentación viva</li>
                <li><strong>Mantenimiento:</strong> Cambios globales se propagan automáticamente</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                👥 Alineación Entre Disciplinas
              </h4>
              <ul className="space-y-2 text-sm text-default-600">
                <li><strong>Diseñadores:</strong> Trabajan con componentes predefinidos, se enfocan en problemas complejos</li>
                <li><strong>Desarrolladores:</strong> Implementan una vez, reutilizan múltiples veces</li>
                <li><strong>Product Managers:</strong> Pueden estimar tiempos más precisamente</li>
              </ul>
            </div>
          </div>
        </ContentCard>

        <StatsGrid 
          stats={[
            { number: "40%", label: "Reducción en tiempo de desarrollo", color: "success" },
            { number: "60%", label: "Menos errores de usabilidad", color: "primary" },
            { number: "25%", label: "Menor curva de aprendizaje", color: "warning" }
          ]}
        />
      </div>
    )
  },
  {
    id: 'when-to-change',
    title: 'Cuándo cambiar y cuándo no',
    description: 'Aprende cuándo romper la consistencia estratégicamente y cuándo mantenerla',
    category: fundamentalsCategory,
    order: 4,
    estimatedReadTime: 8,
    tags: ['estrategia', 'decisiones', 'framework'],
    content: (
      <div className="space-y-8">
        <SectionHeader
          title="¿Cuándo SÍ y cuándo NO cambiar?"
          description="La consistencia no es dogma. Aprende cuándo romperla estratégicamente y cuándo mantenerla a toda costa."
          category={fundamentalsCategory}
          estimatedReadTime={8}
          tags={['estrategia', 'decisiones', 'framework']}
        />

        <ContentCard
          title="✅ CUÁNDO SÍ Romper la Consistencia"
          variant="highlighted"
          className="mb-8"
        >
          <ProcessSteps
            steps={[
              {
                number: 1,
                title: "Jerarquía de Información Crítica",
                description: "Situación: Destacar acciones de alta importancia o riesgo. Ejemplo: Botón rojo para 'Eliminar cuenta' entre botones azules estándar"
              },
              {
                number: 2,
                title: "Evolución de Convenciones",
                description: "Situación: Cuando una convención ya no sirve a los usuarios actuales. Ejemplo: Reemplazar el ícono de disquete (💾) para 'guardar'"
              },
              {
                number: 3,
                title: "Contexto Funcional Específico",
                description: "Situaciones: Estados de error, modos especiales (dark mode), campañas temporales"
              },
              {
                number: 4,
                title: "Feedback Basado en Datos",
                description: "Criterio: Métricas de usabilidad demuestran que la inconsistencia mejora la experiencia"
              }
            ]}
          />
        </ContentCard>

        <ContentCard
          title="❌ CUÁNDO NO Romper la Consistencia"
          variant="bordered"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-danger/10 border border-danger/20">
              <h4 className="font-semibold text-danger mb-2">🚫 Preferencias Personales</h4>
              <p className="text-sm mb-2"><strong>Evitar:</strong> "Este botón se vería mejor en verde"</p>
              <p className="text-sm text-default-600"><strong>Razón:</strong> Las decisiones estéticas sin justificación funcional crean caos</p>
            </div>
            <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
              <h4 className="font-semibold text-warning mb-2">📈 Tendencias sin Propósito</h4>
              <p className="text-sm mb-2"><strong>Evitar:</strong> Adoptar cada nueva tendencia visual sin evaluar beneficios</p>
              <p className="text-sm text-default-600"><strong>Ejemplo:</strong> Implementar neumorfismo solo porque está de moda</p>
            </div>
            <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
              <h4 className="font-semibold text-warning mb-2">🔧 Inconsistencias Menores</h4>
              <p className="text-sm mb-2"><strong>Evitar:</strong> Cambios que no aportan valor significativo</p>
              <p className="text-sm text-default-600"><strong>Ejemplo:</strong> Variar el padding de botones en 2px sin razón funcional</p>
            </div>
            <div className="p-4 rounded-lg bg-danger/10 border border-danger/20">
              <h4 className="font-semibold text-danger mb-2">⏰ Presión de Tiempo</h4>
              <p className="text-sm mb-2"><strong>Evitar:</strong> Crear soluciones "temporales" que se vuelven permanentes</p>
              <p className="text-sm text-default-600"><strong>Mejor práctica:</strong> Usar componentes existentes aunque no sean perfectos</p>
            </div>
          </div>
        </ContentCard>

        <ContentCard
          title="Las 4 Preguntas Antes de Romper la Consistencia"
          variant="gradient"
        >
          <ol className="space-y-3 text-default-600">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <span><strong>¿Hay datos que justifiquen el cambio?</strong> (Tests de usuario, métricas, feedback)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <span><strong>¿El beneficio supera la confusión generada?</strong> (Análisis costo-beneficio)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <span><strong>¿Es reversible o hay plan de migración?</strong> (Estrategia de implementación)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <span><strong>¿Mejora objetivamente la experiencia?</strong> (No solo opinión, sino evidencia)</span>
            </li>
          </ol>
        </ContentCard>
      </div>
    )
  },
  {
    id: 'visual-decisions',
    title: 'Decisiones visuales con intención',
    description: 'Cómo tomar decisiones de diseño basadas en datos y frameworks objetivos',
    category: fundamentalsCategory,
    order: 5,
    estimatedReadTime: 10,
    tags: ['framework', 'metodología', 'datos'],
    content: (
      <div className="space-y-8">
        <SectionHeader
          title="Decisiones visuales con intención"
          description="Cómo tomar decisiones de diseño basadas en datos y frameworks objetivos, no en gustos personales."
          category={fundamentalsCategory}
          estimatedReadTime={10}
          tags={['framework', 'metodología', 'datos']}
        />

        <ProcessSteps
          steps={[
            {
              number: 1,
              title: "Establecer Principios de Diseño del Producto",
              description: "Proceso: Workshop de alineación → Identificar valores core → Traducir a principios visuales"
            },
            {
              number: 2,
              title: "Implementar Heurísticas de Evaluación",
              description: "Base: Las 10 Heurísticas de Nielsen aplicadas a decisiones visuales"
            },
            {
              number: 3,
              title: "Crear Procesos de Evaluación en Equipo",
              description: "Framework: Design Review + Devil's Advocate + Validación objetiva"
            }
          ]}
        />

        <ComparisonTable
          title="Ejemplos de Principios Visuales"
          data={{
            headers: ["Valor", "Principio Visual", "Aplicación Práctica"],
            rows: [
              ["Claridad", "Claridad sobre Creatividad", "Priorizamos legibilidad sobre efectos visuales complejos"],
              ["Eficiencia", "Menos Clics, Más Resultados", "Botones primarios siempre visibles, shortcuts claros"],
              ["Confianza", "Predictibilidad sobre Sorpresa", "Patrones familiares, comportamientos esperados"],
              ["Accesibilidad", "Usable por Todos", "Contraste mínimo AA, navegación por teclado"]
            ]
          }}
        />

        <ContentCard
          title="Design Review Framework"
          variant="highlighted"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-success mb-3 flex items-center gap-2">
                ✅ Checklist Antes de Implementar
              </h4>
              <ul className="space-y-2 text-sm text-default-600">
                <li>¿Hay componentes similares existentes?</li>
                <li>¿Se alinea con nuestros principios de diseño?</li>
                <li>¿Cómo afecta los flujos principales de usuario?</li>
                <li>¿Es implementable con nuestro stack actual?</li>
                <li>¿Cumple estándares WCAG 2.1 AA?</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                👥 Durante Review
              </h4>
              <ul className="space-y-2 text-sm text-default-600">
                <li><strong>Participantes:</strong> Diseñador, Developer Lead, Product Manager, UX Researcher</li>
                <li><strong>Duración:</strong> 30-45 minutos máximo</li>
                <li><strong>Entregables:</strong> Lista de acciones específicas con responsables y fechas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-warning mb-3 flex items-center gap-2">
                🎭 Ritual de "Devil's Advocate"
              </h4>
              <ul className="space-y-2 text-sm text-default-600">
                <li>Un miembro del equipo argumenta contra la propuesta</li>
                <li><strong>Objetivo:</strong> Identificar sesgos y puntos ciegos</li>
                <li>¿Qué pasaría si un usuario daltónico usa esto?</li>
                <li>¿Funcionaría en un dispositivo de baja gama?</li>
              </ul>
            </div>
          </div>
        </ContentCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContentCard
            title="📊 Testing con usuarios reales"
            variant="bordered"
          >
            <ul className="space-y-2 text-sm text-default-600">
              <li><strong>5-Second Tests:</strong> ¿Entienden la función principal en 5 segundos?</li>
              <li><strong>First-Click Tests:</strong> ¿Hacen clic donde esperamos?</li>
              <li><strong>Card Sorting:</strong> ¿Categorizan información como esperamos?</li>
            </ul>
          </ContentCard>

          <ContentCard
            title="📈 Métricas cuantitativas"
            variant="bordered"
          >
            <ul className="space-y-2 text-sm text-default-600">
              <li><strong>Tiempo en Tarea:</strong> ¿Las nuevas decisiones reducen el tiempo?</li>
              <li><strong>Tasa de Error:</strong> ¿Hay más errores con el nuevo diseño?</li>
              <li><strong>Satisfaction Score:</strong> ¿Los usuarios reportan mayor satisfacción?</li>
            </ul>
          </ContentCard>

          <ContentCard
            title="♿ Análisis de Accesibilidad"
            variant="bordered"
          >
            <ul className="space-y-2 text-sm text-default-600">
              <li><strong>Contrast Ratio:</strong> Mínimo 4.5:1 para texto normal</li>
              <li><strong>Color Blind Testing:</strong> Usar herramientas como Stark o Color Oracle</li>
              <li><strong>Screen Reader:</strong> Probar con NVDA o VoiceOver</li>
            </ul>
          </ContentCard>
        </div>
      </div>
    )
  },
  {
    id: 'best-practices',
    title: 'Ejemplos de Buenas Prácticas',
    description: 'Casos reales de sistemas de diseño exitosos y cómo implementar consistencia',
    category: fundamentalsCategory,
    order: 6,
    estimatedReadTime: 12,
    tags: ['casos reales', 'sistemas', 'implementación'],
    content: (
      <div className="space-y-8">
        <SectionHeader
          title="Ejemplos detallados de buenas prácticas"
          description="Casos reales de sistemas de diseño exitosos y cómo implementar consistencia visual estratégicamente."
          category={fundamentalsCategory}
          estimatedReadTime={12}
          tags={['casos reales', 'sistemas', 'implementación']}
        />

        <ContentCard
          title="🎨 Sistemas de Color Estratégicos"
          variant="highlighted"
        >
          <div className="space-y-4">
            <h4 className="font-medium">Caso de Éxito: Atlassian Design System</h4>
            <CodeBlock 
              title="Paleta Atlassian"
              code={`Primarios:
• Azul (#0052CC) - Acciones principales, links
• Verde (#00875A) - Estados de éxito, confirmaciones  
• Rojo (#DE350B) - Errores, advertencias críticas
• Naranja (#FF8B00) - Alertas, información importante

Grises funcionales:
• N900 (#091E42) - Texto principal
• N800 (#253858) - Texto secundario  
• N300 (#DFE1E6) - Bordes, separadores
• N100 (#F4F5F7) - Fondos, áreas inactivas`}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                <h5 className="font-semibold text-success mb-2">✅ Por qué funciona:</h5>
                <ul className="space-y-1 text-sm text-default-600">
                  <li><strong>Limitado:</strong> Solo 4 colores primarios previenen decisiones arbitrarias</li>
                  <li><strong>Semántico:</strong> Cada color tiene significado específico y consistente</li>
                  <li><strong>Escalable:</strong> Los grises cubren todas las necesidades de jerarquía</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-danger/10 border border-danger/20">
                <h5 className="font-semibold text-danger mb-2">❌ Anti-patrón Común:</h5>
                <p className="text-sm text-default-600">Usar colores diferentes para cada sección "para que se vea más dinámico", resultando en una paleta de 12+ colores sin jerarquía clara.</p>
              </div>
            </div>
          </div>
        </ContentCard>

        <ContentCard
          title="📏 Espaciado Sistemático"
          variant="bordered"
        >
          <div className="space-y-4">
            <h4 className="font-medium">Sistema de 8pt Grid (Material Design)</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CodeBlock 
                title="Sistema de Espaciado Base: 8px"
                code={`Micro espacios:
• 4px - Entre íconos y texto
• 8px - Padding interno de botones

Espacios medianos:
• 16px - Entre secciones relacionadas
• 24px - Márgenes de cards

Espacios grandes:
• 32px - Entre secciones independientes  
• 64px - Espacios de respiración principales`}
              />
              <CodeBlock 
                title="Implementación CSS"
                code={`:root {
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-xxl: 64px;
}

.button {
  padding: var(--space-sm) var(--space-md);
  margin-bottom: var(--space-md);
}`}
              />
            </div>
          </div>
        </ContentCard>

        <ContentCard
          title="🔘 Estados de Componentes Predecibles"
          variant="gradient"
        >
          <ComparisonTable
            title="Sistema de Estados para Botones"
            data={{
              headers: ["Estado", "Visual", "Uso"],
              rows: [
                ["Default", "Fondo azul, texto blanco", "Estado inicial"],
                ["Hover", "Fondo azul oscuro (+10%)", "Mouse encima"],
                ["Active", "Fondo azul muy oscuro (+20%)", "Mientras se hace clic"],
                ["Focus", "Borde azul, outline visible", "Navegación por teclado"],
                ["Disabled", "Fondo gris, texto gris claro", "No disponible temporalmente"],
                ["Loading", "Spinner, texto 'Cargando...'", "Procesando acción"]
              ]
            }}
          />
        </ContentCard>

        <ContentCard
          title="La Consistencia como Ventaja Competitiva"
          variant="highlighted"
        >
          <p className="text-lg leading-relaxed">
            La consistencia visual no es solo una preferencia estética; es una <strong>estrategia de producto</strong> que reduce costos de desarrollo, acelera la adopción de nuevas funcionalidades, mejora la percepción de calidad y facilita la escalabilidad del equipo y el producto.
          </p>
        </ContentCard>
      </div>
    )
  },
  {
    id: 'trends-analysis',
    title: 'Análisis de Tendencias',
    description: 'Las tendencias como evolución tecnológica, cultural y de comportamiento',
    category: trendsCategory,
    order: 7,
    estimatedReadTime: 8,
    tags: ['tendencias', 'análisis', 'estrategia'],
    content: (
      <div className="space-y-8">
        <SectionHeader
          title="Análisis estratégico de tendencias UI"
          description="Las tendencias no son moda: son evolución tecnológica, cultural y de comportamiento del usuario."
          category={trendsCategory}
          estimatedReadTime={8}
          tags={['tendencias', 'análisis', 'estrategia']}
        />

        <ContentCard
          title="¿Por Qué Importan las Tendencias en el Diseño de Interfaces?"
          variant="highlighted"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                🚀 Avances Tecnológicos
              </h4>
              <ul className="space-y-2 text-sm text-default-600">
                <li><strong>Glassmorfismo:</strong> Surge con mejores procesadores gráficos</li>
                <li><strong>Dark Mode:</strong> Emerge por pantallas OLED que ahorran batería</li>
                <li><strong>Neumorfismo:</strong> Aprovecha capacidades CSS modernas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                👥 Evolución de Expectativas
              </h4>
              <ul className="space-y-2 text-sm text-default-600">
                <li>Los usuarios desarrollan tolerancia visual a ciertos estilos</li>
                <li>Buscan diferenciación entre productos similares</li>
                <li>Valoran experiencias emocionales más ricas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-warning mb-3 flex items-center gap-2">
                🌍 Contexto Cultural y Social
              </h4>
              <ul className="space-y-2 text-sm text-default-600">
                <li><strong>Brutalismo digital:</strong> Cuestionamiento a la perfección corporativa</li>
                <li><strong>Retro-futurismo:</strong> Nostalgia millennial y cultura gamer</li>
                <li><strong>Maximalismo:</strong> Reacción al minimalismo dominante</li>
              </ul>
            </div>
          </div>
        </ContentCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContentCard
            title="✅ CUÁNDO SÍ Adoptar Tendencias"
            variant="bordered"
          >
            <ProcessSteps
              steps={[
                {
                  number: 1,
                  title: "Cuando Resuelven Problemas Reales",
                  description: "Criterio: La tendencia mejora objetivamente la usabilidad o accesibilidad. Ejemplo: Implementar dark mode porque el 60% de usuarios lo prefieren"
                },
                {
                  number: 2,
                  title: "Cuando Se Alinean con la Identidad de Marca",
                  description: "Criterio: La tendencia refuerza los valores y personalidad del producto. Ejemplo: Una app de meditación adopta glassmorphism para transmitir calma"
                },
                {
                  number: 3,
                  title: "Cuando Hay Recursos para Implementar Correctamente",
                  description: "Realidad: Mejor un flat design bien ejecutado que un neumorfismo mediocre"
                }
              ]}
            />
          </ContentCard>

          <ContentCard
            title="❌ CUÁNDO NO Adoptar Tendencias"
            variant="bordered"
          >
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-danger/10 border border-danger/20">
                <h5 className="font-semibold text-danger mb-2">🚫 Solo por Novedad</h5>
                <p className="text-sm mb-2"><strong>Evitar:</strong> "Todos están usando esto, nosotros también deberíamos"</p>
                <p className="text-sm text-default-600"><strong>Riesgo:</strong> Sacrificar usabilidad por estar "trendy"</p>
              </div>
              <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
                <h5 className="font-semibold text-warning mb-2">⚠️ Cuando Contradicen Principios</h5>
                <p className="text-sm mb-2"><strong>Evitar:</strong> Tendencias que comprometen accesibilidad o usabilidad core</p>
                <p className="text-sm text-default-600"><strong>Ejemplo:</strong> Neumorfismo con bajo contraste en app médica</p>
              </div>
              <div className="p-4 rounded-lg bg-danger/10 border border-danger/20">
                <h5 className="font-semibold text-danger mb-2">📅 Sin Estrategia de Evolución</h5>
                <p className="text-sm mb-2"><strong>Evitar:</strong> Adoptar tendencias sin plan de actualización</p>
                <p className="text-sm text-default-600"><strong>Realidad:</strong> Las tendencias cambian, ¿cómo vas a evolucionar?</p>
              </div>
            </div>
          </ContentCard>
        </div>

        <ContentCard
          title="El Dilema: Tendencia vs. Consistencia"
          variant="gradient"
        >
          <div className="text-center">
            <CodeBlock 
              code={`TENSIÓN CONSTANTE:
Seguir tendencias (diferenciación) ↔ Mantener consistencia (usabilidad)`}
            />
            <p className="mt-4 text-lg font-medium">
              <strong>La clave está en adoptar elementos específicos de tendencias sin comprometer el sistema general.</strong>
            </p>
          </div>
                 </ContentCard>
       </div>
     )
   },
   {
     id: 'neumorphism',
     title: 'Neumorfismo',
     description: 'Soft UI, sombras suaves, apariencia de elementos "inflados" o hundidos',
     category: trendsCategory,
     order: 8,
     estimatedReadTime: 6,
     tags: ['neumorphism', 'soft UI', 'tendencias'],
     content: (
       <div className="space-y-8">
         <SectionHeader
           title="Neumorfismo (Neumorphism)"
           description="Soft UI, sombras suaves, apariencia de elementos 'inflados' o hundidos"
           category={trendsCategory}
           estimatedReadTime={6}
           tags={['neumorphism', 'soft UI', 'tendencias']}
         />

         <TrendCard
           title="Neumorfismo (Neumorphism)"
           subtitle="Soft UI, sombras suaves, apariencia de elementos 'inflados' o hundidos"
           emoji="🔸"
           strengths={[
             "Crea interfaces táctiles e intuitivas",
             "Transmite sensación premium",
             "Affordances claras para interacción", 
             "Estéticamente atractivo y moderno"
           ]}
           weaknesses={[
             "Problemas severos de accesibilidad",
             "Bajo contraste compromete legibilidad",
             "Alto costo de desarrollo y mantenimiento",
             "No escalable para interfaces complejas"
           ]}
           contexts={[
             "Apps premium con usuarios tech-savvy",
             "Portfolios creativos y showcases",
             "Controles específicos (audio, termostatos)",
             "Landing pages con poca información"
           ]}
           whenUse="Elementos que necesitan destacar como 'físicos' - controles de audio, termostatos, botones de acción principal en apps minimalistas."
           whenNotUse="Interfaces con mucha información, usuarios con problemas visuales, apps que requieren alta legibilidad."
           examples={[
             {
               title: "CleanMyMac X",
               description: "Usa neumorfismo en sus controles circulares para transmitir sensación premium y táctil en la interfaz de limpieza.",
               icon: "🧹"
             },
             {
               title: "Smart Home Apps",
               description: "Apps como Philips Hue y Nest usan elementos neumórficos en controles de termostatos y luces para simular controles físicos.",
               icon: "🏠"
             },
             {
               title: "Dribbble Concepts",
               description: "Miles de conceptos creativos en Dribbble muestran neumorfismo en dashboards, music players y apps de fitness.",
               icon: "🎨"
             }
           ]}
         />

         <ContentCard
           title="🎯 Ejemplo Interactivo"
           variant="highlighted"
         >
           <NeumorphismExample />
         </ContentCard>
       </div>
     )
   },
   {
     id: 'glassmorphism',
     title: 'Glassmorfismo',
     description: 'Fondos difuminados (frosted glass), transparencias, brillos',
     category: trendsCategory,
     order: 9,
     estimatedReadTime: 6,
     tags: ['glassmorphism', 'transparencia', 'tendencias'],
     content: (
       <div className="space-y-8">
         <SectionHeader
           title="Glassmorfismo (Glassmorphism)"
           description="Fondos difuminados (frosted glass), transparencias, brillos"
           category={trendsCategory}
           estimatedReadTime={6}
           tags={['glassmorphism', 'transparencia', 'tendencias']}
         />

         <TrendCard
           title="Glassmorfismo (Glassmorphism)"
           subtitle="Fondos difuminados (frosted glass), transparencias, brillos"
           emoji="💧"
           strengths={[
             "Transmite modernidad y sofisticación",
             "Crea profundidad sin ser pesado",
             "Perfecta para overlays y modales",
             "Se integra bien con contenido de fondo"
           ]}
           weaknesses={[
             "Puede comprometer legibilidad",
             "Requiere fondos cuidadosamente diseñados",
             "Performance issues en dispositivos débiles",
             "Difícil de implementar consistentemente"
           ]}
           contexts={[
             "Landing pages y headers",
             "Modales y overlays",
             "Productos tech/fintech",
             "Navegación que debe mantenerse visible"
           ]}
           whenUse="Elementos que necesitan estar 'encima' del contenido - modales, navegación, cards flotantes que deben mantener contexto visual."
           whenNotUse="Áreas con mucho texto, interfaces de alta densidad informativa, cuando la legibilidad es crítica."
           examples={[
             {
               title: "macOS Big Sur/Monterey",
               description: "Barra de menús, dock y Control Center usan glassmorphism para mantenerse visibles sin interferir con el contenido.",
               icon: "🍎"
             },
             {
               title: "Windows 11",
               description: "Microsoft implementó 'Acrylic Material' en menús contextuales, taskbar y ventanas del sistema.",
               icon: "🖥️"
             },
             {
               title: "Stripe Dashboard",
               description: "Usa elementos glass en modales y overlays para mantener contexto visual mientras muestra información crítica.",
               icon: "💳"
             },
             {
               title: "Spotify (Web)",
               description: "Implementa glassmorphism en el player flotante y algunos modales para crear jerarquía visual elegante.",
               icon: "🎧"
             }
           ]}
           codeExample={`/* Implementación CSS Glassmorphism */
.glass-element {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
}`}
         />

         <ContentCard
           title="🎯 Ejemplo Interactivo"
           variant="highlighted"
         >
           <GlassmorphismExample />
         </ContentCard>
       </div>
     )
   },
   {
     id: 'material-design',
     title: 'Material Design',
     description: 'Flat design con reglas de profundidad, animación y principios físicos',
     category: trendsCategory,
     order: 10,
     estimatedReadTime: 8,
     tags: ['material design', 'google', 'sistema'],
     content: (
       <div className="space-y-8">
         <SectionHeader
           title="Material Design (Google)"
           description="Flat design con reglas de profundidad, animación y principios físicos"
           category={trendsCategory}
           estimatedReadTime={8}
           tags={['material design', 'google', 'sistema']}
         />

         <TrendCard
           title="Material Design (Google)"
           subtitle="Flat design con reglas de profundidad, animación y principios físicos"
           emoji="📱"
           strengths={[
             "Sistema completo y probado en producción",
             "Excelente balance usabilidad/modernidad",
             "Documentación extensa y componentes listos",
             "Amplia adopción y reconocimiento"
           ]}
           weaknesses={[
             "Puede hacer que productos se vean 'generic Google'",
             "Limitaciones en personalización de marca",
             "Curva de aprendizaje para implementación completa",
             "Algunas reglas pueden ser restrictivas"
           ]}
           contexts={[
             "Productos que valoran eficiencia y familiaridad",
             "Equipos que necesitan sistema robusto rápidamente",
             "Apps con funcionalidad compleja",
             "Productos B2B y de productividad"
           ]}
           whenUse="Equipos que necesitan sistema robusto rápidamente, productos con funcionalidad compleja que se benefician de patrones familiares."
           whenNotUse="Productos que necesitan diferenciación visual fuerte, marcas con identidad muy específica que no se alinea con los principios Material."
           examples={[
             {
               title: "Google Apps Suite",
               description: "Gmail, Drive, Calendar, Docs - implementación completa y coherente del sistema Material Design.",
               icon: "📱"
             },
             {
               title: "Shopify Admin",
               description: "Usa Polaris (su sistema basado en Material) manteniendo coherencia en toda la plataforma de e-commerce.",
               icon: "🛒"
             },
             {
               title: "Revolut App",
               description: "Fintech que adapta Material Design manteniendo su identidad de marca única en cards y navegación.",
               icon: "🏦"
             },
             {
               title: "Atlassian Products",
               description: "Jira, Confluence, Trello - variación consistente de Material adaptada a herramientas de productividad.",
               icon: "📊"
             }
           ]}
           codeExample={`/* Ejemplo de Espaciado Material */
/* Base unit: 8dp */
.material-spacing {
  margin: 8px;     /* 1 unit */
  padding: 16px;   /* 2 units */
}

.card {
  elevation: 2;    /* 2dp shadow */
  border-radius: 4dp;
}`}
         />

         <ContentCard
           title="🎯 Ejemplo Interactivo"
           variant="highlighted"
         >
           <MaterialDesignExample />
         </ContentCard>

         <ContentCard
           title="Pilares del Sistema Material"
           variant="highlighted"
         >
           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
             <div className="p-3 rounded-lg bg-primary/10 text-center">
               <div className="text-2xl mb-2">📏</div>
               <p className="text-sm font-medium">Grid system de 8dp</p>
             </div>
             <div className="p-3 rounded-lg bg-primary/10 text-center">
               <div className="text-2xl mb-2">🎨</div>
               <p className="text-sm font-medium">Paleta de colores semántica</p>
             </div>
             <div className="p-3 rounded-lg bg-primary/10 text-center">
               <div className="text-2xl mb-2">📝</div>
               <p className="text-sm font-medium">Tipografía Roboto escalable</p>
             </div>
             <div className="p-3 rounded-lg bg-primary/10 text-center">
               <div className="text-2xl mb-2">🏗️</div>
               <p className="text-sm font-medium">Elevaciones y sombras sistemáticas</p>
             </div>
             <div className="p-3 rounded-lg bg-primary/10 text-center">
               <div className="text-2xl mb-2">⚡</div>
               <p className="text-sm font-medium">Motion design coherente</p>
             </div>
             <div className="p-3 rounded-lg bg-primary/10 text-center">
               <div className="text-2xl mb-2">🔧</div>
               <p className="text-sm font-medium">Componentes reutilizables</p>
             </div>
           </div>
         </ContentCard>
       </div>
     )
   },
   {
     id: 'dark-mode-design',
     title: 'Dark Mode Design',
     description: 'No es un estilo per se, pero condiciona el uso del color, luz y contraste',
     category: trendsCategory,
     order: 11,
     estimatedReadTime: 8,
     tags: ['dark mode', 'accesibilidad', 'colores'],
     content: (
       <div className="space-y-8">
         <SectionHeader
           title="Dark Mode Design"
           description="No es un estilo per se, pero condiciona el uso del color, luz y contraste"
           category={trendsCategory}
           estimatedReadTime={8}
           tags={['dark mode', 'accesibilidad', 'colores']}
         />

         <TrendCard
           title="Dark Mode Design"
           subtitle="No es un estilo per se, pero condiciona el uso del color, luz y contraste"
           emoji="🌙"
           strengths={[
             "Mejor para la vista en ambientes oscuros",
             "Ahorro significativo de batería (OLED)",
             "Percepción premium y moderna",
             "Reduce fatiga visual en uso prolongado"
           ]}
           weaknesses={[
             "No siempre mejor para legibilidad",
             "Implementación compleja (dos sistemas)",
             "Puede afectar percepción de colores",
             "Requiere testing adicional"
           ]}
           contexts={[
             "Universal - debe ser opcional",
             "Especialmente valioso para uso nocturno",
             "Apps de productividad y desarrollo",
             "Contenido multimedia y entretenimiento"
           ]}
           whenUse="Siempre ofrecer la opción, especialmente para uso nocturno. Es una expectativa moderna básica."
           whenNotUse="Nunca como única opción. Algunos usuarios prefieren modo claro, especialmente para lectura de texto largo."
           examples={[
             {
               title: "Twitter / X",
               description: "Implementación ejemplar de dark mode con paleta específica y elementos rediseñados para el contexto oscuro.",
               icon: "🐦"
             },
             {
               title: "VS Code",
               description: "Editor de código con múltiples temas oscuros perfectamente optimizados para programadores y uso prolongado.",
               icon: "💻"
             },
             {
               title: "Netflix",
               description: "Dark mode nativo que mejora la experiencia de viewing y reduce fatiga visual durante maratones.",
               icon: "📺"
             },
             {
               title: "WhatsApp",
               description: "Modo oscuro que mantiene legibilidad en chats mientras ahorra batería en dispositivos OLED.",
               icon: "📱"
             }
           ]}
           codeExample={`/* CSS Variables para Dark Mode */
:root {
  --bg-primary: #ffffff;
  --text-primary: #212121;
}

[data-theme="dark"] {
  --bg-primary: #121212;
  --text-primary: #ffffff;
}

.element {
  background: var(--bg-primary);
  color: var(--text-primary);
}`}
         />

         <ComparisonTable
           title="Sistema de Colores Paralelo"
           data={{
             headers: ["Elemento", "Light Mode", "Dark Mode"],
             rows: [
               ["Fondo principal", "#FFFFFF", "#121212"],
               ["Fondo secundario", "#F5F5F5", "#1E1E1E"],
               ["Texto principal", "#212121", "#FFFFFF"],
               ["Texto secundario", "#757575", "#AAAAAA"],
               ["Primario", "#2196F3", "#64B5F6"]
             ]
           }}
         />

         <ContentCard
           title="🎯 Ejemplo Interactivo"
           variant="highlighted"
         >
           <DarkModeExample />
         </ContentCard>

         <ContentCard
           title="Principios de Implementación"
           variant="highlighted"
         >
           <ProcessSteps
             steps={[
               {
                 number: 1,
                 title: "Sistema Paralelo Completo",
                 description: "Crear sistema de colores completamente paralelo y coherente, no solo invertir colores."
               },
               {
                 number: 2,
                 title: "Testing Exhaustivo",
                 description: "Probar legibilidad, contraste y percepción en ambos modos."
               },
               {
                 number: 3,
                 title: "Consistencia de Marca",
                 description: "Adaptar elementos de marca para que funcionen en ambos contextos."
               }
             ]}
           />
         </ContentCard>
       </div>
     )
   },
   {
     id: 'brutalism',
     title: 'Brutalismo Digital',
     description: 'Estética cruda, anti-diseño, tipografía grande, bloques duros',
     category: trendsCategory,
     order: 12,
     estimatedReadTime: 5,
     tags: ['brutalismo', 'anti-diseño', 'experimental'],
     content: (
       <div className="space-y-8">
         <SectionHeader
           title="Brutalismo Digital"
           description="Estética cruda, anti-diseño, tipografía grande, bloques duros"
           category={trendsCategory}
           estimatedReadTime={5}
           tags={['brutalismo', 'anti-diseño', 'experimental']}
         />

         <TrendCard
           title="Brutalismo Digital"
           subtitle="Estética cruda, anti-diseño, tipografía grande, bloques duros"
           emoji="🔲"
           strengths={[
             "Máxima diferenciación visual",
             "Transmite autenticidad y disrupción",
             "Rompe con convenciones establecidas",
             "Memorable y con fuerte personalidad"
           ]}
           weaknesses={[
             "Puede alejar usuarios mainstream",
             "Usabilidad frecuentemente comprometida",
             "Difícil de mantener coherencia",
             "Limitado a audiencias específicas"
           ]}
           contexts={[
             "Portfolios creativos y showcases",
             "Marcas disruptivas y contraculturales",
             "Arte digital y medios experimentales",
             "Productos que quieren desafiar normas"
           ]}
           whenUse="Marcas que quieren desafiar convenciones, audiencias creativas que valoran la expresión sobre la comodidad."
           whenNotUse="Productos que requieren confianza y usabilidad (fintech, salud), audiencias conservadoras o empresariales."
           examples={[
             {
               title: "The Outline (Media)",
               description: "Portal de noticias que usa tipografía bold, layouts quebrados y colores intensos para diferenciarse del periodismo tradicional.",
               icon: "📰"
             },
             {
               title: "Gumroad (2021 Redesign)",
               description: "E-commerce que adoptó estética brutalista con botones enormes, tipografía pesada y layouts poco convencionales.",
               icon: "🛒"
             },
             {
               title: "Bloomberg Businessweek",
               description: "Diseños editoriales digitales que rompen grids tradicionales con layouts experimentales y tipografía disruptiva.",
               icon: "🎨"
             },
             {
               title: "Balenciaga Web",
               description: "Fashion brand que usa elementos brutalistas en su e-commerce para reflejar su estética vanguardista.",
               icon: "👗"
             }
           ]}
         />

         <ContentCard
           title="🎯 Ejemplo Interactivo"
           variant="highlighted"
         >
           <BrutalismExample />
         </ContentCard>
       </div>
     )
   },
   {
     id: 'claymorphism',
     title: 'Claymorphism',
     description: 'Botones y elementos redondeados, sombras intensas, estilo "plastilina"',
     category: trendsCategory,
     order: 13,
     estimatedReadTime: 5,
     tags: ['claymorphism', 'soft UI', 'amigable'],
     content: (
       <div className="space-y-8">
         <SectionHeader
           title="Claymorphism"
           description="Botones y elementos redondeados, sombras intensas, estilo 'plastilina'"
           category={trendsCategory}
           estimatedReadTime={5}
           tags={['claymorphism', 'soft UI', 'amigable']}
         />

         <TrendCard
           title="Claymorphism"
           subtitle="Botones y elementos redondeados, sombras intensas, estilo 'plastilina'"
           emoji="💖"
           strengths={[
             "Muy accesible y amigable",
             "Transmite diversión sin ser infantil",
             "Excelente para onboarding",
             "Reduce intimidación de interfaces complejas"
           ]}
           weaknesses={[
             "Puede no ser tomado en serio",
             "Limitado a ciertos contextos",
             "Riesgo de parecer demasiado juvenil",
             "Puede cansar visualmente"
           ]}
           contexts={[
             "Apps de bienestar y salud mental",
             "Plataformas educativas",
             "Productos consumer friendly",
             "Onboarding y primeras experiencias"
           ]}
           whenUse="Productos que quieren reducir intimidación, onboarding de nuevos usuarios, apps que compiten en base a simplicidad."
           whenNotUse="Herramientas profesionales, productos enterprise, contextos donde la seriedad es crucial."
           examples={[
             {
               title: "Headspace App",
               description: "App de meditación que pioneeró claymorphism en interfaces de bienestar, con botones suaves y animaciones orgánicas.",
               icon: "🧘"
             },
             {
               title: "Apple Arcade Games",
               description: "Varios juegos usan elementos clay para crear interfaces más accesibles y menos intimidantes para casual gamers.",
               icon: "🎮"
             },
             {
               title: "Duolingo (Elementos)",
               description: "Incorpora clay elements en achievements y progress indicators para hacer el aprendizaje más divertido y motivador.",
               icon: "📚"
             },
             {
               title: "Pill Reminder Apps",
               description: "Apps de salud que usan claymorphism para hacer la gestión médica menos clínica y más amigable.",
               icon: "💊"
             }
           ]}
           codeExample={`/* CSS Claymorphism */
.clay-element {
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  border-radius: 20px;
  box-shadow: 
    20px 20px 40px #bebebe,
    -20px -20px 40px #ffffff;
}`}
         />

         <ContentCard
           title="🎯 Ejemplo Interactivo"
           variant="highlighted"
         >
           <ClaymorphismExample />
         </ContentCard>
       </div>
     )
     },
     {
       id: 'application-framework',
       title: 'Framework de Aplicación',
       description: 'Un proceso de 5 pasos para adoptar tendencias sin sacrificar la consistencia visual',
       category: applicationCategory,
       order: 14,
       estimatedReadTime: 8,
       tags: ['framework', 'aplicación', 'proceso'],
       content: (
         <div className="space-y-8">
           <SectionHeader
             title="Framework para Aplicar Tendencias Conscientemente"
             description="Un proceso de 5 pasos para adoptar tendencias sin sacrificar la consistencia visual."
             category={applicationCategory}
             estimatedReadTime={8}
             tags={['framework', 'aplicación', 'proceso']}
           />

           <ProcessSteps
             steps={[
               {
                 number: 1,
                 title: "Auditoría de Necesidades",
                 description: "Pregunta clave: ¿Qué problemas actuales podría resolver esta tendencia? Identifica fricción específica en la experiencia actual antes de considerar cualquier cambio visual."
               },
               {
                 number: 2,
                 title: "Evaluación de Coherencia",
                 description: "Pregunta clave: ¿Se puede integrar sin romper nuestro sistema actual? Mapea cómo la tendencia interactuaría con componentes existentes."
               },
               {
                 number: 3,
                 title: "Prototipo Controlado",
                 description: "Implementación: Prueba en área limitada y mide resultados. Usa A/B testing para validar hipótesis sobre mejoras de UX."
               },
               {
                 number: 4,
                 title: "Documentación de Reglas",
                 description: "Si funciona: Crear guías específicas para su uso. Define cuándo, dónde y cómo aplicar la tendencia consistentemente."
               },
               {
                 number: 5,
                 title: "Rollout Sistemático",
                 description: "Aplicación: Implementa consistentemente donde sea apropiado. Evita aplicación arbitraria; sigue las reglas documentadas."
               }
             ]}
           />

           <ComparisonTable
             title="Framework de Decisión: Tendencia + Consistencia"
             data={{
               headers: ["Evaluación", "Preguntas Clave"],
               rows: [
                 ["Impacto en Sistema", "¿Esta tendencia requiere crear componentes completamente nuevos?"],
                 ["Coherencia Visual", "¿Se puede integrar sin romper la armonía visual existente?"],
                 ["Consistencia Funcional", "¿Los usuarios seguirán encontrando lo que buscan donde lo esperan?"],
                 ["Escalabilidad", "¿Podemos aplicar esta tendencia consistentemente en todo el producto?"],
                 ["Mantenimiento", "¿Tenemos recursos para mantener esta tendencia actualizada?"]
               ]
             }}
           />

           <ContentCard
             title="Estrategias de Balance"
             variant="highlighted"
           >
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div>
                 <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                   🎯 Adopción Selectiva
                 </h4>
                 <p className="text-sm mb-2"><strong>Principio:</strong> Adoptar elementos específicos sin comprometer el sistema general</p>
                 <p className="text-sm text-default-600"><strong>Ejemplo:</strong> Usar gradientes aurora en headers pero mantener el sistema de botones existente</p>
               </div>
               <div>
                 <h4 className="font-semibold text-success mb-3 flex items-center gap-2">
                   📈 Evolución Gradual del Sistema
                 </h4>
                 <p className="text-sm mb-2"><strong>Principio:</strong> Actualizar el sistema de diseño incorporando elementos de tendencias</p>
                 <p className="text-sm text-default-600"><strong>Proceso:</strong> Evaluar → Integrar → Documentar → Rollout consistente</p>
               </div>
               <div>
                 <h4 className="font-semibold text-warning mb-3 flex items-center gap-2">
                   🧪 Áreas de Experimentación Controlada
                 </h4>
                 <p className="text-sm mb-2"><strong>Principio:</strong> Designar zonas específicas para explorar tendencias</p>
                 <p className="text-sm text-default-600"><strong>Ejemplos:</strong> Landing pages experimentales, onboarding emocional, core functionality consistente</p>
               </div>
             </div>
           </ContentCard>

           <ContentCard
             title="Tendencias Como Herramientas, No Como Destinos"
             variant="gradient"
           >
             <p className="text-lg leading-relaxed">
               Las tendencias de diseño son <strong>herramientas estratégicas</strong> que deben elegirse basándose en necesidades específicas del usuario, objetivos de negocio claros, coherencia con el sistema existente, y capacidad de ejecución de calidad.
             </p>
           </ContentCard>
         </div>
       )
     },
     {
       id: 'conclusions',
       title: 'Conclusiones',
       description: 'Síntesis de principios fundamentales para crear experiencias digitales coherentes',
       category: applicationCategory,
       order: 15,
       estimatedReadTime: 6,
       tags: ['conclusiones', 'síntesis', 'principios'],
       content: (
         <div className="space-y-8">
           <SectionHeader
             title="Consistencia Visual: La Verdadera Ventaja Competitiva"
             description="Síntesis de principios fundamentales para crear experiencias digitales coherentes, escalables y exitosas."
             category={applicationCategory}
             estimatedReadTime={6}
             tags={['conclusiones', 'síntesis', 'principios']}
           />

           <StatsGrid 
             stats={[
               { number: "15", label: "Secciones de aprendizaje", color: "primary" },
               { number: "13", label: "Tendencias analizadas", color: "success" },
               { number: "5", label: "Frameworks prácticos", color: "warning" },
               { number: "∞", label: "Aplicaciones posibles", color: "secondary" }
             ]}
           />

           <ContentCard
             title="Principios Fundamentales"
             variant="highlighted"
           >
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                 <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                   🎯 La Consistencia es Estrategia
                 </h4>
                 <p className="text-sm text-default-600">No es solo preferencia estética, sino una estrategia de producto que reduce costos, acelera adopción y mejora percepción de calidad.</p>
               </div>
               <div>
                 <h4 className="font-semibold text-warning mb-3 flex items-center gap-2">
                   ⚖️ Balance Inteligente
                 </h4>
                 <p className="text-sm text-default-600">La maestría está en saber cuándo adoptar, cuándo adaptar, y cuándo ignorar las tendencias en favor de la usabilidad.</p>
               </div>
               <div>
                 <h4 className="font-semibold text-success mb-3 flex items-center gap-2">
                   📊 Decisiones Basadas en Datos
                 </h4>
                 <p className="text-sm text-default-600">Frameworks objetivos y testing con usuarios reales superan las preferencias personales en todas las decisiones visuales.</p>
               </div>
               <div>
                 <h4 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                   🔧 Sistemas Escalables
                 </h4>
                 <p className="text-sm text-default-600">La verdadera creatividad en UX/UI está en resolver problemas complejos dentro de sistemas coherentes.</p>
               </div>
             </div>
           </ContentCard>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             <ContentCard
               title="🏗️ Para Equipos de Desarrollo"
               variant="bordered"
             >
               <p className="text-sm text-default-600">
                 <strong>Establece sistemas de diseño</strong> robustos que actúen como documentación viva y faciliten la colaboración entre disciplinas.
               </p>
             </ContentCard>

             <ContentCard
               title="👥 Para Diseñadores"
               variant="bordered"
             >
               <p className="text-sm text-default-600">
                 <strong>Enfócate en problemas complejos</strong> mientras los componentes reutilizables resuelven las decisiones básicas automáticamente.
               </p>
             </ContentCard>

             <ContentCard
               title="🚀 Para Product Managers"
               variant="bordered"
             >
               <p className="text-sm text-default-600">
                 <strong>Invierte en consistencia</strong> como ventaja competitiva a largo plazo que acelera el desarrollo y mejora la retención.
               </p>
             </ContentCard>

             <ContentCard
               title="🎓 Para Estudiantes"
               variant="bordered"
             >
               <p className="text-sm text-default-600">
                 <strong>Domina los fundamentos</strong> antes de seguir tendencias. La consistencia visual es una habilidad transferible y valiosa.
               </p>
             </ContentCard>
           </div>

           <ContentCard
             title="El Futuro del Diseño de Interfaces"
             variant="gradient"
           >
             <div className="space-y-4">
               <p className="text-lg leading-relaxed">
                 A medida que la tecnología evoluciona, los principios de consistencia visual se mantienen constantes. Las tendencias vienen y van, pero <strong>la necesidad humana de patrones predecibles y experiencias coherentes es universal</strong>.
               </p>
               
               <div className="p-4 rounded-lg bg-default-50 dark:bg-default-900/20">
                 <h4 className="font-semibold text-foreground mb-2">Tu Próximo Paso</h4>
                 <p className="text-sm text-default-600">
                   Toma los frameworks aprendidos y aplícalos en tu próximo proyecto. Comienza con una auditoría de consistencia visual y construye desde ahí. Recuerda: cada decisión visual es una oportunidad de reforzar o debilitar la coherencia de tu producto.
                 </p>
               </div>
             </div>
           </ContentCard>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <ContentCard
               title="📚 Recursos Adicionales"
               variant="bordered"
             >
               <ul className="space-y-1 text-sm text-default-600">
                 <li>Nielsen Norman Group - Heurísticas de Usabilidad</li>
                 <li>Material Design Guidelines</li>
                 <li>Atlassian Design System</li>
                 <li>Shopify Polaris</li>
                 <li>Apple Human Interface Guidelines</li>
               </ul>
             </ContentCard>

             <ContentCard
               title="🔧 Herramientas Recomendadas"
               variant="bordered"
             >
               <ul className="space-y-1 text-sm text-default-600">
                 <li>Figma/Sketch - Design Systems</li>
                 <li>Stark - Accessibility Testing</li>
                 <li>Contrast Ratio Checkers</li>
                 <li>Hotjar/Crazy Egg - Heat Maps</li>
                 <li>Storybook - Component Documentation</li>
               </ul>
             </ContentCard>

             <ContentCard
               title="🎯 Próximos Pasos"
               variant="bordered"
             >
               <ul className="space-y-1 text-sm text-default-600">
                 <li>Audita tu producto actual</li>
                 <li>Define principios de diseño</li>
                 <li>Crea tu design system</li>
                 <li>Implementa procesos de review</li>
                 <li>Mide y optimiza continuamente</li>
               </ul>
             </ContentCard>
           </div>

           <div className="text-center p-8 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl">
             <h2 className="text-2xl font-bold mb-4">¡Gracias por completar la investigación!</h2>
             <p className="text-lg opacity-90">
               Ahora tienes las herramientas para crear experiencias digitales consistentes, escalables y exitosas.
             </p>
           </div>
         </div>
       )
     },
     {
       id: 'more-trends-references',
       title: 'Más Tendencias y Referencias',
       description: 'Catálogo completo de tendencias UI con ejemplos de referencia adicionales',
       category: applicationCategory,
       order: 16,
       estimatedReadTime: 10,
       tags: ['tendencias', 'referencias', 'catálogo'],
       content: (
         <div className="space-y-8">
           <SectionHeader
             title="Catálogo Completo de Tendencias UI"
             description="Ejemplos de referencia adicionales para completar tu arsenal de conocimiento en tendencias de diseño."
             category={applicationCategory}
             estimatedReadTime={10}
             tags={['tendencias', 'referencias', 'catálogo']}
           />

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             <ContentCard
               title="🔳 Skeumorfismo"
               variant="bordered"
             >
               <div className="space-y-4">
                 <p className="text-sm text-default-600 italic">Imita objetos reales con texturas, sombras y volumen</p>
                 
                 <h5 className="font-medium text-foreground">Ejemplos Reales:</h5>
                 <div className="space-y-2 text-sm">
                   <div><strong>📱 iOS 6 y anteriores:</strong> Calculator, Notes, iBooks con texturas de cuero y papel realistas.</div>
                   <div><strong>🎹 GarageBand:</strong> Mantiene elementos skeumórficos en instrumentos virtuales.</div>
                   <div><strong>🐦 Tweetbot:</strong> Metáforas visuales de máquinas y controles físicos.</div>
                 </div>
               </div>
             </ContentCard>

             <ContentCard
               title="📦 Flat Design"
               variant="bordered"
             >
               <div className="space-y-4">
                 <p className="text-sm text-default-600 italic">Minimalismo, colores planos, sin volumen ni sombras</p>
                 
                 <h5 className="font-medium text-foreground">Ejemplos Reales:</h5>
                 <div className="space-y-2 text-sm">
                   <div><strong>🖥️ Windows Phone:</strong> Pionero del flat design con Metro UI y tiles coloridos.</div>
                   <div><strong>📝 Medium:</strong> Enfoque extremo en contenido y legibilidad.</div>
                   <div><strong>📘 Facebook (2013-2018):</strong> Era flat con íconos simples y colores planos.</div>
                 </div>
               </div>
             </ContentCard>

             <ContentCard
               title="📟 Retro-futurismo / Cyber UI"
               variant="bordered"
             >
               <div className="space-y-4">
                 <p className="text-sm text-default-600 italic">Referencias ochenteras, tipografías pixeladas, neones, glitch</p>
                 
                 <h5 className="font-medium text-foreground">Ejemplos Reales:</h5>
                 <div className="space-y-2 text-sm">
                   <div><strong>🎮 Cyberpunk 2077 UI:</strong> Define el cyber UI moderno con glitches y neones.</div>
                   <div><strong>🎵 Synthwave Spotify:</strong> Covers que usan gradientes neon y grids cyber.</div>
                   <div><strong>🚗 Tesla Arcade:</strong> Estética retro-futurista coherente con la marca.</div>
                 </div>
               </div>
             </ContentCard>

             <ContentCard
               title="🧠 UX Realism / Functional Aesthetic"
               variant="bordered"
             >
               <div className="space-y-4">
                 <p className="text-sm text-default-600 italic">El diseño sigue la función al extremo, prioriza claridad sobre ornamentación</p>
                 
                 <h5 className="font-medium text-foreground">Ejemplos Reales:</h5>
                 <div className="space-y-2 text-sm">
                   <div><strong>📊 Tableau Dashboards:</strong> Funcionalidad absoluta sobre elementos decorativos.</div>
                   <div><strong>💻 GitHub Interface:</strong> UI orientada completamente a la función.</div>
                   <div><strong>📈 Bloomberg Terminal:</strong> Maximiza densidad y eficiencia operacional.</div>
                 </div>
               </div>
             </ContentCard>

             <ContentCard
               title="🪩 Aurora UI / Blurred Gradients"
               variant="bordered"
             >
               <div className="space-y-4">
                 <p className="text-sm text-default-600 italic">Degradados suaves, fondos difusos tipo aurora boreal</p>
                 
                 <h5 className="font-medium text-foreground">Ejemplos Reales:</h5>
                 <div className="space-y-2 text-sm">
                   <div><strong>💳 Stripe Connect:</strong> Gradientes aurora para transmitir innovación fintech.</div>
                   <div><strong>🎨 Figma Brand Pages:</strong> Gradientes holográficos para comunicar creatividad.</div>
                   <div><strong>📱 iOS 16 Wallpapers:</strong> Parte del lenguaje visual del sistema.</div>
                 </div>
               </div>
             </ContentCard>

             <ContentCard
               title="🎨 Maximalismo / Anti-Minimalismo"
               variant="bordered"
             >
               <div className="space-y-4">
                 <p className="text-sm text-default-600 italic">Mucho color, muchos elementos, información cargada a propósito</p>
                 
                 <h5 className="font-medium text-foreground">Ejemplos Reales:</h5>
                 <div className="space-y-2 text-sm">
                   <div><strong>👕 Supreme Online Store:</strong> Diseño denso y colores saturados.</div>
                   <div><strong>📰 Refinery29:</strong> Layouts densos para target millennial/Gen Z.</div>
                   <div><strong>🛍️ Dover Street Market:</strong> Diseño caótico intencional para experiencia inmersiva.</div>
                 </div>
               </div>
             </ContentCard>
           </div>

           <ContentCard
             title="🧬 Generative / Algorithmic Design"
             variant="highlighted"
           >
             <div className="space-y-4">
               <p className="text-default-600 italic mb-4">Visuales generados por código, patrones automáticos, diseño dinámico</p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 <div className="p-3 rounded-lg bg-default-50 dark:bg-default-900/20">
                   <h6 className="font-medium text-foreground mb-1">🎵 Spotify Wrapped</h6>
                   <p className="text-xs text-default-600">Visualizaciones generadas algorítmicamente basadas en datos de escucha personal.</p>
                 </div>
                 <div className="p-3 rounded-lg bg-default-50 dark:bg-default-900/20">
                   <h6 className="font-medium text-foreground mb-1">📊 Observable Notebooks</h6>
                   <p className="text-xs text-default-600">Gráficos dinámicos basados en datasets en tiempo real.</p>
                 </div>
                 <div className="p-3 rounded-lg bg-default-50 dark:bg-default-900/20">
                   <h6 className="font-medium text-foreground mb-1">💻 GitHub Contribution Graphs</h6>
                   <p className="text-xs text-default-600">Visualización automática que crea patrones únicos para cada developer.</p>
                 </div>
                 <div className="p-3 rounded-lg bg-default-50 dark:bg-default-900/20">
                   <h6 className="font-medium text-foreground mb-1">🎨 Art Blocks (NFTs)</h6>
                   <p className="text-xs text-default-600">Arte generativo donde cada pieza es única, creada por algoritmos.</p>
                 </div>
                 <div className="p-3 rounded-lg bg-default-50 dark:bg-default-900/20">
                   <h6 className="font-medium text-foreground mb-1">📈 Trading View Charts</h6>
                   <p className="text-xs text-default-600">Gráficos financieros que se generan dinámicamente con datos en tiempo real.</p>
                 </div>
                 <div className="p-3 rounded-lg bg-default-50 dark:bg-default-900/20">
                   <h6 className="font-medium text-foreground mb-1">🏃 Strava Heatmaps</h6>
                   <p className="text-xs text-default-600">Mapas generados algorítmicamente que muestran rutas populares.</p>
                 </div>
               </div>
             </div>
           </ContentCard>

           <ContentCard
             title="🎯 Laboratorio de Tendencias - Ejemplos Interactivos"
             variant="highlighted"
           >
             <div className="space-y-6">
               <p className="text-lg text-center">
                 Explora cada tendencia con ejemplos visuales interactivos. Haz clic en "Ver Código" para entender la implementación.
               </p>
               <AllTrendExamples />
             </div>
           </ContentCard>

           <ContentCard
             title="El Panorama Completo de Tendencias UI"
             variant="gradient"
           >
             <div className="space-y-4">
               <p className="text-lg leading-relaxed">
                 Cada tendencia responde a necesidades específicas de usuarios, contextos culturales y avances tecnológicos. <strong>La clave está en entender por qué existe cada tendencia</strong> y cuándo aplicarla estratégicamente, no seguirlas ciegamente.
               </p>
               
               <StatsGrid 
                 stats={[
                   { number: "13+", label: "Tendencias analizadas", color: "primary" },
                   { number: "50+", label: "Ejemplos reales documentados", color: "success" },
                   { number: "∞", label: "Combinaciones posibles", color: "warning" }
                 ]}
               />
             </div>
           </ContentCard>
         </div>
       )
     }
];

export const getSectionById = (id: string): ContentSection | undefined => {
  return sections.find(section => section.id === id);
};

export const getSectionsByCategory = (categoryId: string): ContentSection[] => {
  return sections.filter(section => section.category.id === categoryId).sort((a, b) => a.order - b.order);
};

export const getSectionsByOrder = (): ContentSection[] => {
  return sections.sort((a, b) => a.order - b.order);
}; 