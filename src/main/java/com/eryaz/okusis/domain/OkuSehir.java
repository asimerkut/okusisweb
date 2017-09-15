package com.eryaz.okusis.domain;


import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A OkuSehir.
 */
@Entity
@Table(name = "oku_sehir")
public class OkuSehir implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "kod")
    private String kod;

    @Column(name = "isim")
    private String isim;

    @ManyToOne
    private OkuSehir parent;

    // jhipster-needle-entity-add-field - Jhipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getKod() {
        return kod;
    }

    public OkuSehir kod(String kod) {
        this.kod = kod;
        return this;
    }

    public void setKod(String kod) {
        this.kod = kod;
    }

    public String getIsim() {
        return isim;
    }

    public OkuSehir isim(String isim) {
        this.isim = isim;
        return this;
    }

    public void setIsim(String isim) {
        this.isim = isim;
    }

    public OkuSehir getParent() {
        return parent;
    }

    public OkuSehir parent(OkuSehir okuSehir) {
        this.parent = okuSehir;
        return this;
    }

    public void setParent(OkuSehir okuSehir) {
        this.parent = okuSehir;
    }
    // jhipster-needle-entity-add-getters-setters - Jhipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        OkuSehir okuSehir = (OkuSehir) o;
        if (okuSehir.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), okuSehir.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "OkuSehir{" +
            "id=" + getId() +
            ", kod='" + getKod() + "'" +
            ", isim='" + getIsim() + "'" +
            "}";
    }
}
